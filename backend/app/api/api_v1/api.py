from fastapi import APIRouter

from app.api.api_v1.endpoints import fairest, rules

api_router = APIRouter()
api_router.include_router(fairest.router, prefix="/fairest", tags=["fairest"])
api_router.include_router(rules.router, prefix='/rules', tags=["rules"])
