from typing import Any, Dict, List
from unicodedata import name
from sqlalchemy import Column, Integer, String
from ...Core.Data.BaseModel import BaseModel

class DeviceType(BaseModel):
    """ Table DeviceTypes Database model

    Args:
        BaseModel (ORMClass): Parent class

    Returns:
        DeviceType: Instance of model
    """
    __tablename__ = 'DeviceTypes'
    id = Column("IdDeviceType", Integer, primary_key=True)
    name = Column("name", String, nullable=False)
    
    model_path_name = "device-type"
    
    def property_map(self) -> Dict:
        return {
            "id": "IdDeviceType"
        }
    
    @classmethod
    def display_members(cls_) -> List[str]:
        return [
            "id", "name"
        ]
    
    @classmethod
    def rules_for_store(cls_) -> Dict[str, List[Any]]:
        return {
            "name": ["required", "string"]
        }
