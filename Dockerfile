FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm install -g babel-cli

ENV UMAMI_APP_URL="https://url.com/"
ENV UMAMI_APP_USERNAME="username"
ENV UMAMI_APP_PASSWORD="password"
ENV UMAMI_WEBSITEUUID="Your-WebsiteUuid"

EXPOSE 3000
CMD [ "npm", "start" ]
