"""empty message

Revision ID: 06a1fdd84023
Revises: 0915d1d25efe
Create Date: 2022-06-26 00:52:50.624607

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '06a1fdd84023'
down_revision = '0915d1d25efe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    device_types_table = op.create_table('DeviceTypes',
    sa.Column('IdDeviceType', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('IdDeviceType')
    )
    
    op.bulk_insert(device_types_table, [
        {'name': 'MQTT'},
        {'name': 'Modbus TCP'},
        {'name': 'ZigBee'},
    ])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('DeviceTypes')
    # ### end Alembic commands ###
