FROM node:latest
WORKDIR /usr/app
COPY app/ .
ENTRYPOINT node index.js
EXPOSE 3000