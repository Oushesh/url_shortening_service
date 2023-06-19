#!/bin/bash

# Apply database migrations
echo "Running Server on FastAPI"
uvicorn app:app --reload

