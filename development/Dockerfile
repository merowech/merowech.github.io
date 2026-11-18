FROM node:18-alpine

WORKDIR /app

COPY ./merowech/package*.json ./
RUN npm install

COPY ./merowech .

EXPOSE 3000

CMD ["npm", "start"]
