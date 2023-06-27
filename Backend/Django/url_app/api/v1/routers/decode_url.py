import os
from dotenv import load_dotenv
from ninja import Router
from itertools import count
from django.http import HttpResponseRedirect
from django.core.cache import cache


router = Router()
counter = count()

@router.get("/decode_url")
def decode_url(request,short_url: str, redirect: bool = False):
    url_mapping = cache.get("url_mapping", {})
    long_url = url_mapping.get(short_url, '')
    print("cache:", long_url)
    if long_url:
        if redirect:
            if long_url.startswith("http://") or long_url.startswith("https://"):

                return RedirectResponse(url=long_url)
            else:
                return {"error": "Invalid URL format for redirection"}
        else:
            return {"long_url": long_url}
    else:
        return {"error": "Short URL not found"}