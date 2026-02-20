FROM docker.io/node:18-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]