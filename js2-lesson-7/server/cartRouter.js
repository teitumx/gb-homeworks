const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();

//запрос
router.get('/', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({
        result: 0,
        text: err
      }));
    } else {
      res.send(data);
    }
  });
});

//добавление нового товара в корзину
router.post('/', (req, res) => {
  handler(req, res, 'add', './server/db/userCart.json'); //add - добавление товара
});

// localhost:3000/api/cart/123 // req.params.id
// localhost:3000/api/cart/?var1='sfsf'&var2='ada' // req.query
router.put('/:id', (req, res) => {
  handler(req, res, 'change', './server/db/userCart.json'); //change - изменение кол-ва товара
});

module.exports = router;