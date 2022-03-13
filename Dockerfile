FROM node:16.14.0

WORKDIR /home/mk-react-app

COPY package.json .

RUN yarn install && rm yarn.lock

COPY . .

ENTRYPOINT npm start


