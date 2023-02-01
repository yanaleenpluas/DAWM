var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home CUSTOMER. */
router.get('/customer', async function(req, res, next) {
  const URL = 'http://localhost:4444/customer/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config) 
  res.render('customer', { title: 'Customer', customer: response.data });

})

/* GET home CUSTOMER ORDER. */
router.get('/customer/orders/:customerNumber',  function(req, res, next) {
  const URL = `https://api-2-5a450-default-rtdb.firebaseio.com/collection.json?orderBy=%22customerNumber%22&equalTo=${req.params.customerNumber}`
  const response =  axios.get(URL);
  response.then((data) => {
    let shippedArray = [];
    for (let key in data.data){
      if(data.data[key].status === 'Shipped'){
        shippedArray.push(data.data[key]);
      }
    }
    res.render('order', { title: 'Order', orderShipper: shippedArray , id:req.params.customerNumber });


  });
});
/* GET home CUSTOMER productos. */
router.get('/customer/productos/:customerNumber',  function(req, res, next) {
  const URL = `https://api-2-5a450-default-rtdb.firebaseio.com/collection.json?orderBy=%22customerNumber%22&equalTo=${req.params.customerNumber}`
  const response =  axios.get(URL);
  response.then((data) => {
    let productosArray = [];
    for (let key in data.data){
        productosArray.push(data.data[key]);
    }
    res.render('productos', { title: 'Productos', productos: productosArray , id:req.params.customerNumber });
  });
});


router.get('/productosALL', async function(req, res, next) {
  const URL = `https://api-2-5a450-default-rtdb.firebaseio.com/collection.json`

  const response =  axios.get(URL);
  response.then((data) => {
    let productosArray = [];
    for (let key in data.data){
        productosArray.push(data.data[key]);
    }
    res.render('productosALL', { title: 'Productos', productos: productosArray , id:req.params.customerNumber });
  });

});

module.exports = router;
