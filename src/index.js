const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { node } = require('./setting');

const app = express();

//Setting
app.set('port',node.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middlewares
app.use(morgan('dev'));

//Routers
app.use(require('./routers/'));
app.use('/category',require('./routers/category.js')); // add a prefix '/category' to all router from API category backend
app.use('/product',require('./routers/product.js')); // add a prefix '/product' to all router from product API product backend
app.use('/',require('./routers/categoryView.js')); // add a prefix '/product' to all router from category views
app.use('/',require('./routers/productView.js')); // add a prefix '/product' to all router from category views

//Server
app.listen(app.get('port'),()=>{
    console.log('Server listening on port ' + app.get('port'));
});