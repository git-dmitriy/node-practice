const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Message</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body></html>'
    );
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>Hello from Node.js server!</h1></body></html>'
  );
  res.end();
});

server.listen(3000);
