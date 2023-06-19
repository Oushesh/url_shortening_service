## Router to win the game

import os
from dotenv import load_dotenv
from ninja import Router

router = Router()

def encode_url(url_input: str):
    #long_url = url_input.url
    long_url = url_input
    md5_hash = md5(long_url.encode()).hexdigest()
    short_url = f'{md5_hash[:6]}{next(counter)}'
    url_mapping[short_url] = long_url
    return {"short_url": short_url}

@router.get("/encode")
def encode_url_api(request,url:str):
