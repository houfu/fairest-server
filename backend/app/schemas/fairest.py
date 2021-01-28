from typing import Union, Dict, Any, List, Optional

from fairest.models import SeverityLevel
from pydantic import BaseModel


class FairestRequest(BaseModel):
    request_body: Union[str, bytes]
    disable: Union[Dict[str, Any], None]
    options: Union[Dict[str, Any], None]


class FairestReport(BaseModel):
    title: str
    message: str
    rule_id: str
    severity: str = SeverityLevel.OTHERS.name
    example: Optional[str]
    attribution: Optional[str]
    position: Optional[str]


class FairestResult(BaseModel):
    source: FairestRequest
    reports: List[FairestReport]
    debug_log: str
