from portal.app.Core.Services.BaseService import BaseService
from portal.app.Data.Models import DeviceType


class DeviceTypeService(BaseService):
    def __init__(self) -> None:
        super().__init__(DeviceType)
