FROM  python:3.11-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django django-cors-headers djangorestframework

# copy from the current directory of the Dockerfile to /api in the image
COPY . . 

EXPOSE 8000