FROM node:14-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV UMAMI_APP_URL=umami.website.com
ENV UMAMI_APP_USERNAME=username
ENV UMAMI_APP_PASSWORD=password

EXPOSE 3000
CMD [ "npm", "start" ]
