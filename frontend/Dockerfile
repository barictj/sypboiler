
FROM node:10-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install


# Copying source files
COPY . .

# Building app
RUN npm run build

# Building app
RUN npm install nodemon -g
# Running the app
RUN npm rebuild node-sass
CMD [ "npm", "run", "dev" ]

