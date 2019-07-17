const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//Setting
app.set('port',5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middlewares
app.use(morgan('dev'));

//Routers
app.use(require('./routers/'));
app.use('/category',require('./routers/category.js')); // add a prefix '/category' to all router from category
app.use('/product',require('./routers/product.js')); // add a prefix '/product' to all router from product

//Server
app.listen(app.get('port'),()=>{
    console.log('Server listening on port ' + app.get('port'));
});