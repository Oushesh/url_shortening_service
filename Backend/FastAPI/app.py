from fastapi import FastAPI, Response
from fastapi.responses import RedirectResponse
from typing import Union
from pydantic import BaseModel
from hashlib import md5
from itertools import count
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from cachetools import Cache
from hashlib import md5


# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:3000",  # Add your frontend URL here
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

counter = count(1) #Counter starting from 1


cache = Cache(maxsize=100)  #Unbounded cache

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

@app.get("/")
def read_root(here):
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

@app.get("/encode_url")
def encode_url(long_url: str):
    #Put a test here if url already exists.
    if not long_url in cache:
        md5_hash = md5(long_url.encode()).hexdigest()
        short_url = f'{md5_hash[:6]}{next(counter)}'
        cache[short_url] = long_url
    else:
        #url already exists --> so we query directly from
        #the cache.
        print ("url_in_cache")
        short_url=cache[long_url]
    return {"short_url": short_url}


#TODO: added option to redirect to url:
@app.get("/decode_url")
def decode_url(short_url: str, redirect: bool = False, response: Response = None):
    long_url = cache.get(short_url)
    if long_url:
        if redirect:
            return RedirectResponse(url=long_url)
        else:
            return {"long_url": long_url}
    else:
        return {"error": "Short URL not found"}

##Add the python counter to if to avoid collision.
## Add option to redirect to new url.