const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/categories',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/category/categories.html'));
});

router.get('/categories/new',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/category/categoryNew.html'));
});

router.get('/categories/update/:id',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/category/categoryUpdate.html'));
});

router.get('/categoryCtl',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/controller/category.js'));
});

module.exports = router;