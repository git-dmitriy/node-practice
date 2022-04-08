const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, 'utf-8', (err, fileContent) => {
    if (err) return cb([]);
    cb(fileContent ? JSON.parse(fileContent) : []);
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => console.info(err));
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
