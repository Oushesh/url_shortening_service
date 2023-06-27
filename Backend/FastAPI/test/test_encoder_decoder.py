import pytest
import json, requests
import os,sys
current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
sys.path.append(parent)

from src.msg.data import data
from src.index import encode_url, decode_url

class TestURLShortenerFail:

    encoded_URL = "https://url-shortening-service-ol9j.vercel.app/encode_url"
    decoded_URL = "https://url-shortening-service-ol9j.vercel.app/decode_url"

    @pytest.mark.asyncio
    async def test_encode_decode_recover(self):
        input_urls = [
            "https://www.google.com",
            "https://www.example.com",
            "https://www.github.com",
            "https://www.openai.com",
            "https://www.invalidurl.com",  # Invalid URL intentionally added
            "https://www.example.com/page?param1=value1&param2=value2&param3=value3",
            "https://www.google.com/search?q=python+programming&num=10",
            "https://www.github.com/repo/issues?state=open&labels=bug",
            "https://www.openai.com/blog/the-future-of-artificial-intelligence",
        ]
        errors = []
        
        for url in input_urls:
            try:
                encoded_params = {"url_input": url}
                encoded_response = requests.get(self.encoded_URL, params=encoded_params)
                assert encoded_response.status_code == 200

                data = encoded_response.json()
                encoded_data = data["short_url"]

                decoded_params = {"short_url": encoded_data}
                decoded_response = requests.get(self.decoded_URL, params=decoded_params)

                original_url = decoded_response.json()["long_url"]
                assert url == original_url

            except AssertionError:
                errors.append(f"Assertion failed for URL: {url}")

        if errors:
            pytest.fail("\n".join(errors))










