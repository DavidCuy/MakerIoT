from portal.app.Core.Services.BaseService import BaseService
from portal.app.Data.Models import MqttTopic


class MqttTopicService(BaseService):
    def __init__(self) -> None:
        super().__init__(MqttTopic)
