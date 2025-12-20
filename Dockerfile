FROM node:18

WORKDIR /home/node/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN chmod +x .docker/entrypoint.sh

CMD [".docker/entrypoint.sh"]
