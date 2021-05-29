const http = require('http');

const server = http.createServer((req, res) => {
  console.log(process);
  process.exit();
});

server.listen(3000);
