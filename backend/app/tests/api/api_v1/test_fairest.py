from fastapi.testclient import TestClient


def test_get_reports(client: TestClient):
    response = client.post('/api/v1/fairest', json={'source_request': "This is a test sentence."})
    assert response.status_code == 200
    assert response.content
