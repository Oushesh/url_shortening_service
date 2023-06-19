# syntax=docker/dockerfile:1
FROM python:3.10.0
ARG PORT=8000
LABEL maintainer="oushesh"
ENV PYTHONUNBUFFERED 1

WORKDIR .
COPY requirements.txt ./

RUN apt update && \
	apt install build-essential && \
	rm -rf /var/cache/apk/* && \
	pip install --upgrade pip && \
	pip install --no-cache-dir -r requirements.txt

COPY dev-docker-entrypoint.sh ./
COPY . ./

RUN chmod a+x dev-docker-entrypoint.sh
ENTRYPOINT ["./dev-docker-entrypoint.sh"]
