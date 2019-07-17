const express = require('express');
const router = express.Router();

const db = require('../db');

//This router list all the categories
router.get('/list',async(req,res)=>{
    const lstCategroies = await //we wait for list of categories
        db.query('SELECT id, code, name, description FROM category;');
        res.send(lstCategroies);
});

//This router get a category by id
router.get('/list/:id',async(req,res)=>{
    const {id} = req.params;
    const lstCategroies = await //we wait for list of categories
        db.query('SELECT id, code, name, description FROM category WHERE id = ?;',[id]);
        res.send(lstCategroies[0]);
});

//This router delete a category by id
router.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params;

    //Verify if the category has a relations with any product
    const lstProducts = await //we wait for list of products
    db.query('SELECT id FROM product WHERE idCategory = ?;',[id]);

    if(lstProducts.length == 0){
        await //we wait for list of categories
        db.query('DELETE FROM category WHERE id = ?;',[id]);
        res.send({
            'delete':true,
            'message':'Category delete with success.'
        });
    }else{
        res.send({
            'delete':false,
            'message':'Category has associated products.'
        });
    }
});

//This router save a new categroy
router.post('/new',async (req,res)=>{
    
    //Get parameters from request
    const {code, name, description} = req.body;

    //Create object category
    const newCategory = {
        code, name, description
    }

    //save the object in the database
    await //we wait that information is saved, in case that late
        db.query('INSERT INTO category SET ?',[newCategory]);
    
    //Return the transaction status 
    res.send(newCategory);
});

//This router update the category in the data base
router.put('/update/:id',async(req,res)=>{
    const {id} = req.params;

    //Get parameters from request
    const {code, name, description} = req.body;

    //Object category updated
    const newCategory = {
        code, name, description
    }

    //save the object in the database
    await //we wait that information is update, in case that late
        db.query('UPDATE category SET ? WHERE id = ?',[newCategory,id]);
    
    //Return the transaction status 
    res.send(newCategory);

});


module.exports = router;