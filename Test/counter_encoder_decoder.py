#from fastapi import FastAPI
from pydantic import BaseModel
from hashlib import md5
from itertools import count

#app = FastAPI()

# Dictionary to store short URLs
url_mapping = {}
counter = count()

class URLInput(BaseModel):
    url: str

class URLOutput(BaseModel):
    short_url: str

#@app.post("/encode", response_model=URLOutput)
def encode_url(url_input: str):
    #long_url = url_input.url
    long_url = url_input
    md5_hash = md5(long_url.encode()).hexdigest()
    short_url = f'{md5_hash[:6]}{next(counter)}'
    url_mapping[short_url] = long_url
    return {"short_url": short_url}

#@app.get("/decode/{short_url}")
def decode_url(short_url: str):
    for key, value in url_mapping.items():
        if key.startswith(short_url[:6]):
            return {"long_url": value}
    return {"error": "Short URL not found"}

if  __name__ =="__main__":
    url = "https://www.google.com"
    encoded_url = encode_url(url)
    print (encoded_url)
    #decode_url()
    print ("url_mapping",url_mapping)
    decoded = decode_url(encoded_url["short_url"])
    print ("decoded_url",decoded["long_url"])
    #Decode --> save in dictionary and return backwards.
    new_url = "https://www.google.de"

    #Sample link which do things on Camera Poses
    camera_url_sample_link = "https://groups.google.com/g/ceres-solver/c/qAVJtUImbrY"
    encoded_url = encode_url(camera_url_sample_link)
    print (encoded_url)

    print ("url_mapping",url_mapping)
    decoded = decode_url(encoded_url["short_url"])

    #Decode --> save in dictionary and return backwards.
    print ("decoded_url",decoded["long_url"])

    ## Super long url for example the eau de parfum from Tiffany and Co:
    super_url = "https://www.amazon.de/-/en/Tiffany-Love-Eau-Parfum-90/dp/B07YL2Z7JJ/ref=sr_1_3?crid=5MSCCTE8VNY6&keywords=tiffany+%26+co&qid=1685306133&sprefix=tiffany+%26+co+%2Caps%2C290&sr=8-3#"
    ##Speak of the Decoded space and time complexity:
    encoded_url = encode_url(super_url)
    print (encoded_url)

    print ("url_mapping",url_mapping)
    decoded = decode_url(encoded_url["short_url"])

    #Decode --> save the result in a dictionary and return backwards.
    print("decoded_url", decoded["long_url"])

## Add Comment on why this it has less characters:
## Add isort and black pre-commit hooks

## Add counter to deal with uncertainty

##Next step convert this to Django App then with swagger UI serve the endpoints
## Scaling and how to proceed further --> move to Supabase or any sort of storage devices:
