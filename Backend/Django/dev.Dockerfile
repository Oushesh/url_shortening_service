# syntax=docker/dockerfile:1
FROM python:3.10.0
ARG PORT=8000
LABEL maintainer="oushesh"
ENV PYTHONUNBUFFERED 1

WORKDIR /url_shortener
COPY requirements.txt /url_shortener/

RUN apt update && \
	apt install build-essential && \
	rm -rf /var/cache/apk/* && \
	pip install --upgrade pip && \
	pip install --no-cache-dir -r requirements.txt

COPY . /url_shortener/

RUN chmod a+x /url_shortener/dev-docker-entrypoint.sh
ENTRYPOINT ["/url_shortener/dev-docker-entrypoint.sh"]
