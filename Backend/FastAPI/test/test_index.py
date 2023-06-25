import pytest
import json, requests
import os,sys
current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
sys.path.append(parent)

from src.msg.data import data
from src.index import encode_url, decode_url

@pytest.mark.asyncio
async def test_encode_url():
    URL = "https://url-shortening-service-59tw.vercel.app/encode_url"
    params = {"url_input": "https://www.google.com"}
    response = requests.get(URL, params=params)
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data["short_url"], str)
    #assert data["short_url"] == "8ffdef1"  # Update the expected short_url value


import json

def is_json(myjson):
    try:
        json_object = json.loads(myjson)
    except ValueError as e:
        return False
    return True

@pytest.mark.asyncio
async def test_decode_url():
    # Test cases for decoding URLs
    pass  # Placeholder for the test cases
    URL = "https://url-shortening-service-59tw.vercel.app/decode_url"
    params = {"url_input": "https://www.google.com"}
    response = requests.get(URL, params=params)
    assert response.status_code != 200
    data = response.json()
    #assert isinstance(data["long_url"], str )
    assert isinstance(data,dict)
    #assert isinstance(data["error"], str)
    params = {"url_input": "https://www.google.com"}


# Run the tests
# Write more tests using AI.
