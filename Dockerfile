FROM node:10.15.3-slim

EXPOSE 8080

RUN mkdir /app

WORKDIR /app

COPY package.json /app/package.json

COPY . /app

CMD npm start