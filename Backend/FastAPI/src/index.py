from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from cachetools import Cache
from hashlib import md5
from itertools import count

from src.msg.data import data

app = FastAPI()
cache = Cache(maxsize=100)  # Unbounded cache
counter = count(1)  # Counter starting from 1

# Configure CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",
    # Add more allowed origins if needed
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/encode_url")
def encode_url(url_input: str):
    print ("encoding input:",url_input)
    md5_hash = md5(url_input.encode()).hexdigest()
    short_url = f'{md5_hash[:6]}{next(counter)}'
    cache[short_url] = url_input
    print ("cache originally:",cache)
    return {"short_url": short_url}

@app.get("/decode_url")
def decode_url(short_url: str, redirect: bool = False):
    long_url = cache.get(short_url,'')
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

