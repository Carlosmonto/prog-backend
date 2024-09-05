const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === 'text/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Esta es la página principal</h1>');
  } else if (req.url === 'text/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Esta es la página "Acerca de"');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
