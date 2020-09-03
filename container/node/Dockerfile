FROM node:8

WORKDIR /app

COPY package.json ./

EXPORT

RUN npm install

RUN npm install -y pm2 -g

RUN pm2 start npm --name "$(SITE_PROCESS_NAME)" -- start

COPY . .

EXPOSE 3000


CMD [ "npm", "run", "dev" ]