# syntax=docker/dockerfile:1
FROM python:3.10.0
ARG PORT=8000
LABEL maintainer="oushesh"
ENV PYTHONUNBUFFERED 1

WORKDIR /courtneyryan
COPY requirements.txt /courtneyryan/

RUN apt update && \
	apt install build-essential && \
	rm -rf /var/cache/apk/* && \
	pip install --upgrade pip && \
	pip install --no-cache-dir -r requirements.txt

COPY . /courtneyryan/

RUN chmod a+x /courtneyryan/dev-docker-entrypoint.sh
ENTRYPOINT ["/courtneyryan/dev-docker-entrypoint.sh"]
