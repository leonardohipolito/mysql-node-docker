FROM node:latest
WORKDIR /usr/app
COPY app/ .
RUN npm install
EXPOSE 3000