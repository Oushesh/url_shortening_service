import os
from dotenv import load_dotenv
from ninja import Router
router = Router()

from django.core.cache import cache
from django.http import JsonResponse


#Read the collections
@router.get("/decode_url")
def decode_url(request,short_url: str):
    assert (isinstance(short_url,str))

    # Access the cached dictionary
    url_mapping = cache.get("url_mapping",{})
    print ("cache",url_mapping)
    #Example dict:
    for key, value in url_mapping.items():
        if key.startswith(short_url[:6]):
            return {"long_url": value}
    return {"error": "Short URL not found"}