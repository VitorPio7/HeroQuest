FROM node:18

WORKDIR /home/node/app

RUN apt-get update && apt-get install -y netcat-openbsd

USER node

CMD ["npm", "run", "dev"]
