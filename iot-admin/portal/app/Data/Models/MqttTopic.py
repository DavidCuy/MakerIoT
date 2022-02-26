from typing import Any, Dict, List
from sqlalchemy import Column, Integer, String
from ...Core.Data.BaseModel import BaseModel

class MqttTopic(BaseModel):
    """ Table MqttTopics Database model

    Args:
        BaseModel (ORMClass): Parent class

    Returns:
        MqttTopic: Instance of model
    """
    __tablename__ = 'MqttTopics'
    id = Column("IdMqttTopic", Integer, primary_key=True)
    topic = Column("topic", String, nullable=False)
    
    model_path_name = "mqtt-topic"
    
    def property_map(self) -> Dict:
        return {
            "id": "IdDump"
        }
    
    def display_members(self) -> List[str]:
        return [
            "id", "topic"
        ]
    
    @classmethod
    def rules_for_store(cls_) -> Dict[str, List[Any]]:
        return {
            "topic": ["required", "string"]
        }
