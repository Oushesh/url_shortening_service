from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from hashlib import md5
from itertools import count

app = FastAPI()

username = 'Cluster43596'
password = 'TWB8eXFHRER6'
cluster_uri = 'cluster43596.2lkinc9.mongodb.net'

# Create the MongoDB client
client = MongoClient(f'mongodb+srv://{username}:{password}@{cluster_uri}/test?retryWrites=true&w=majority')

#client = MongoClient('mongodb://localhost:27017/')  # MongoDB connection
db = client['url_cache']  # Database name
counter = count(1)  # Counter starting from 1

# Configure CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",
    # Add more allowed origins if needed
    ".vercel.app",
    "https://url-shortening-service-ol9j-asrsz3ovb-oushesh.vercel.app/encode_url",
    "https://url-shortening-service-ol9j-asrsz3ovb-oushesh.vercel.app/decode_url",
    "*",
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
    print ("input",url_input)
    md5_hash = md5(url_input.encode()).hexdigest()
    short_url = f'{md5_hash[:6]}{next(counter)}'

    # Store the mapping in the database
    db.urls.insert_one({"short_url": short_url, "long_url": url_input})

    # Print the cache from the database
    
    cache = list(db.urls.find())
    print("Cache from MongoDB:")
    for item in cache:
        print(item)

    return {"short_url": short_url}


@app.get("/decode_url")
def decode_url(short_url: str, redirect: bool = False):
    print ("short_url",short_url)
    # Retrieve the mapping from the database
    url_mapping = db.urls.find_one({"short_url": short_url})
    print ("object searched",short_url)
    print ("decoding mapping",url_mapping)
    # Print the cache from the database
    cache = list(db.urls.find())
    print("Cache from MongoDB:")
    for item in cache:
        print(item)

    if url_mapping:
        long_url = url_mapping.get("long_url")

        if redirect:
            if long_url.startswith("http://") or long_url.startswith("https://"):
                return RedirectResponse(url=long_url)
            else:
                return {"error": "Invalid URL format for redirection"}
        else:
            print ("original_url:", long_url)
            return {"long_url": long_url}
    else:
        return {"error": "Short URL not found"}

