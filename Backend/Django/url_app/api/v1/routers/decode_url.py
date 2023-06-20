import os
from dotenv import load_dotenv
from ninja import Router
from itertools import count
from django.http import HttpResponseRedirect
from django.core.cache import cache


router = Router()
counter = count()


#Read the collections
@router.get("/decode_url")
def decode_url(request,short_url: str,redirect:bool = False):
    assert (isinstance(short_url,str))
    # Access the cached dictionary
    url_mapping = cache.get("url_mapping",{})
    print ("cache",url_mapping)
    #Example dict:
    for key, value in url_mapping.items():
        #if key.startswith(short_url[:6]):
        if key.startswith(short_url):
            return {"long_url": value}
    return {"error": "Short URL not found"}
