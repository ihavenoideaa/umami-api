FROM node:18.15.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm install -g babel-cli

ENV UMAMI_APP_URL="url.com/"
ENV UMAMI_APP_USERNAME="username"
ENV UMAMI_APP_PASSWORD="password"
ENV UMAMI_WEBSITEUUID="Your-WebsiteUuid"
ENV TIME_PERIOD = "1d"

EXPOSE 3000
CMD [ "npm", "start" ]
