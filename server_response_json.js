const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end(JSON.stringify({ message: 'buenas noches esto puede ser -----', status: 'success' }));
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
