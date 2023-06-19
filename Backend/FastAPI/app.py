from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from cachetools import TTLCache

from fastapi import FastAPI
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
import aioredis
import hashlib
from hashlib import md5
from itertools import count

counter = count()

app = FastAPI()
cache = FastAPICache(backend=RedisBackend(aioredis.from_url("redis://localhost")))

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/encode")
@cache
def encode_url(request,url_input: str):
    # Access and modify the cache
    url_mapping = cache.get("url_mapping",{})

    long_url = url_input
    md5_hash = md5(long_url.encode()).hexdigest()
    short_url = f'{md5_hash[:6]}{next(counter)}'
    url_mapping[short_url] = long_url

    #add the data back to the cache
    cache.set('url_mapping',url_mapping)
    return {"short_url": short_url}

@app.get("/decode")
@cache()
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