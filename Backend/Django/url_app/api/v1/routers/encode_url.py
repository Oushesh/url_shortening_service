## Router to win the game
import os
from dotenv import load_dotenv
from ninja import Router
from collections import Counter
from pydantic import BaseModel
from hashlib import md5
from itertools import count

counter = count()
router = Router()

class URLInput(BaseModel):
    url: str

class URLOutput(BaseModel):
    short_url: str

def encode_url(url_input: str,url_mapping):
    #long_url = url_input.url
    long_url = url_input
    md5_hash = md5(long_url.encode()).hexdigest()
    short_url = f'{md5_hash[:6]}{next(counter)}'
    url_mapping[short_url] = long_url
    return {"short_url": short_url}

