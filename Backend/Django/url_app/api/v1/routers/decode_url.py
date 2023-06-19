import os
from dotenv import load_dotenv

from ninja import Router
router = Router()


@router.get("/decode_url")
def