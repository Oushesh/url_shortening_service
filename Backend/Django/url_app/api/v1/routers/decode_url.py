import os
from dotenv import load_dotenv

from ninja import Router
router = Router()

#Read the collections
@router.get("/decode_url")
def decode_url(short_url: str,url_mapping:dict):
    for key, value in url_mapping.items():
        if key.startswith(short_url[:6]):
            return {"long_url": value}
    return {"error": "Short URL not found"}