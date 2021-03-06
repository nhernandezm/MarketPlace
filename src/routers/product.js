const express = require('express');
const router = express.Router();

const db = require('../db');


//This router list all the products
router.get('/list',async(req,res)=>{
    const lstProducts = await //we wait for list of products
        db.query('SELECT id, code, name, description, amount, urlImage, idCategory FROM product;');
        res.send(lstProducts);
});

//This router get a product by id
router.get('/list/:id',async(req,res)=>{
    const {id} = req.params;
    const lstProducts = await //we wait for list of categories
        db.query('SELECT id, code, name, description, amount, urlImage, idCategory FROM product WHERE id = ?;',[id]);
        res.send(lstProducts[0]);
});

//This router delete a product by id
router.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params;

    await //we wait for delete product
        db.query('DELETE FROM product WHERE id = ?;',[id]);
        res.send({
            'delete':true,
            'message':'Product delete with success.'
        });

});

//Save a product in the databse
router.post('/new',async (req,res)=>{
    
    //Get parameters from request
    const {code, name, description, amount, urlImage, idCategory} = req.body;

    //Create object product
    const newProduct = {
        code, name, description, amount, urlImage, idCategory
    }

    //save the object in the database
    await //we wait that information is saved, in case that late
        db.query('INSERT INTO product SET ?',[newProduct]);
    
    //Return the transaction status 
    res.send(newProduct);
});

//This router update the category in the data base
router.put('/update/:id',async(req,res)=>{
    const {id} = req.params;
    
    //Get parameters from request
    const {code, name, description, amount, urlImage, idCategory} = req.body;

    //Create object product
    const newProduct = {
        code, name, description, amount, urlImage, idCategory
    }

    //save the object in the database
    await //we wait that information is update, in case that late
        db.query('UPDATE product SET ? WHERE id = ?',[newProduct,id]);
    
    //Return the transaction status 
    res.send(newProduct);

});

//This router list all the products
router.get('/search/:textSearch?',async(req,res)=>{
    const {textSearch} = req.params;
    var query = 'SELECT id, code, name, description, amount, urlImage, idCategory FROM product ';
    if(textSearch){
        query += 'WHERE (code=?) OR (name LIKE "%'+textSearch+'%") OR (description LIKE "%'+textSearch+'%")';
    }

    const lstProducts = await //we wait for list of products
        db.query(query,[textSearch]);
        res.send(lstProducts);
});

//This router list all the products
router.get('/search/category/:id',async(req,res)=>{
    const {id} = req.params;
    var query = 'SELECT id, code, name, description, amount, urlImage, idCategory FROM product WHERE idCategory = ?';

    const lstProducts = await //we wait for list of products
        db.query(query,[id]);
        res.send(lstProducts);
});

module.exports = router;