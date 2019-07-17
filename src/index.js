const express = require('express');
const morgan = require('morgan');

const app = express();

//Setting
app.set('port',5000);

//Middlewares
app.use(morgan('dev'));

//Routers
app.use(require('./routers/'));
app.use(require('./routers/product.js'));

//Server
app.listen(app.get('port'),()=>{
    console.log('Server listening on port ' + app.get('port'));
});