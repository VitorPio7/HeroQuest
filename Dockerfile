##Esse é um dockerfile para implementar toda a API externa
FROM node:lts-slim

RUN apt-get install ...

USER node

WORKDIR /home/node/app