const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./setting');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        console.log(err.message,err.sqlMessage);
    }
    if(connection){
        connection.release();
        console.log('Database connected');
        return;
    }
});

pool.query = promisify(pool.query);

module.exports = pool;