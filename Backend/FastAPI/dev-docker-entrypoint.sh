#!/bin/bash

# Apply database migrations
echo "Running Server on FastAPI"
uvicorn.run app:app --host 0.0.0.0 --port 8000 --reload

