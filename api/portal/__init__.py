import os

from flask import Flask
from flask_migrate import Migrate, migrate
from flask_cors import CORS
from flask.json import jsonify

import portal.database.DBConnection as DBConn
from portal.app.Data.Models import *
from portal.app.Exceptions.APIException import APIException
import Environment as env


def create_app():
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_pyfile(os.path.abspath('./Environment.py'))
    app.config['SQLALCHEMY_DATABASE_URI'] = DBConn.connect_url
    print(app.config['SQLALCHEMY_DATABASE_URI'])
    migrate = Migrate(app, DBConn.db, render_as_batch=True)

    @migrate.configure
    def configure_alembic(config):
        # modify config object
        return config

    DBConn.db.init_app(app)
    CORS(app)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    from .routes.MqttTopicRouter import mqtt_router, mqtt_service
    from.routes.DeviceTypeRouter import deviceType_router, deviceType_service
    from.routes.DeviceRouter import device_router, device_service

    app.register_blueprint(mqtt_router, url_prefix=f'/{env.STAGE}/{mqtt_service.get_model_path_name()}')
    app.register_blueprint(deviceType_router, url_prefix=f'/{env.STAGE}/{deviceType_service.get_model_path_name()}')
    app.register_blueprint(device_router, url_prefix=f'/{env.STAGE}/{device_service.get_model_path_name()}')
    

    @app.errorhandler(APIException)
    def handle_invalid_usage(error: APIException):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response


    return app
