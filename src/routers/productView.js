const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/products',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/product/products.html'));
});

router.get('/products/new',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/product/productNew.html'));
});

router.get('/products/update/:id',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/product/productUpdate.html'));
});

router.get('/productCtl',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/controller/product.js'));
});

module.exports = router;