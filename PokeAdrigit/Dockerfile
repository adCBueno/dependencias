FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY ./src ./src
RUN npm run build
EXPOSE 8080

CMD [ "node", "./build/index.js" ]
