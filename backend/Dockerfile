FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon

EXPOSE 4000
CMD  ["nodemon", "server.js"]