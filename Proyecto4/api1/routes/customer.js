var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;

/*ME DEVUELVE TODA LA INFORMACION DE CUSTOMER FORMATO JSON */
router.get('/findAll/json', function(req, res, next) {  
  Customers.findAll({  
      attributes: { exclude: ["updatedAt"] } ,
  })  
  .then(customer => {  
      res.json(customer);  
  })  
  .catch(error => res.status(400).send(error)) 

});



module.exports = router;