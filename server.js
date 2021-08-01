const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  // process.exit();

  res.setHeader('Content-Type', 'text/html');
  res.write(
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>Hello from Node.js server!</h1></body></html>'
  );
  res.end();
});

server.listen(3000);
