from typing import List

from fairest.core.rules import collect_all_rules
from fairest.models import RuleClass
from fastapi import APIRouter

from app.schemas.rules import FairestRule, RuleProperty

router = APIRouter()


@router.get('/list', response_model=List[FairestRule])
def get_rules_list() -> List[FairestRule]:
    def yield_rules(rules: List[RuleClass]):
        for rule in rules:
            properties_list = []
            for rule_property in rule.describe_properties():
                properties_list.append(
                    RuleProperty(name=rule_property.friendly_name, description=rule_property.description))
            yield FairestRule(name=rule.get_rule_name(), properties_list=rule.describe().description,
                              title=rule.describe().title, rule_type=rule.get_rule_type(),
                              description=rule.describe().description, author=rule.describe().author,
                              contact=rule.describe().contact)

    return list(yield_rules(collect_all_rules()))


@router.post('/enable')
def enable_rule(rule: str) -> bool:
    pass


@router.post('/disable')
def disable_rule(rule: str) -> bool:
    pass
