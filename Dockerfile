FROM quay.io/nodejs:18

WORKDIR /app

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]