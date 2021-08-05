const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware (1)');
  res.send('<h1>Add product page</h1>');
});

app.use('/some-page', (req, res, next) => {
  console.log('In another middleware (2)');
  res.send('<h1>Some page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  res.send('<h1>This always runs!</h1>');
  // next();
});

app.listen(3000);
