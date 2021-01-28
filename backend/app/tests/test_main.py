from fastapi.testclient import TestClient

from app.core.config import settings


def test_root(client: TestClient):
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == {'message': f"Welcome to {settings.PROJECT_NAME} fairest server!"}
