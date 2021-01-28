from typing import Any, List, Optional

from fairest.models import RuleType
from pydantic import BaseModel


class RuleProperty(BaseModel):
    name: str
    description: str
    default_value: Any
    current_value: Any


class FairestRule(BaseModel):
    name: str
    properties_list: List[RuleProperty]
    title: str
    author: Optional[str]
    contact: Optional[str]
    description: str = "A Fairest Rule"
    rule_type: RuleType
