const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req, resp)=>{
    //resp.send(__dirname);
    resp.sendFile(path.join(__dirname+'../../../web/index.html'));
});

router.get('/app',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/app.js'));
});

router.get('/productCtl',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/controller/product.js'));
});
router.get('/categoryCtl',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/controller/category.js'));
});

router.get('/noImage',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/images/no_image_available.png'));
});

router.get('/css',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/css/css.css'));
});

router.get('/categories',(req, resp)=>{
    resp.sendFile(path.join(__dirname+'../../../web/view/categories.html'));
});




module.exports = router;