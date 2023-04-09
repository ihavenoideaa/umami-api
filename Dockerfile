FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV UMAMI_APP_URL
ENV UMAMI_APP_USERNAME
ENV UMAMI_APP_PASSWORD

EXPOSE 3000
CMD [ "npm", "start" ]
