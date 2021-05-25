import pytest
from app import create_app


@pytest.yield_fixture(scope="function", autouse=True)
def app():
    return create_app().test_client()
