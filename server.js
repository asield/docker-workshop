const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hola Workshop - Desplegado en OpenShift con Docker Strategy');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Algo salió mal', err);
  }
  console.log(`Servidor escuchando en el puerto ${port}`);
});