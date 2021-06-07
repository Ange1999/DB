//const connect = require('./precondition/createConnection');
//const executor = require('./precondition/dataBaseExecutor/queryExecution');

const mysql = require('mysql2');
const config = require('./config/config');

const dbConfig = config.db;
const connection = mysql.createConnection(dbConfig);
//const pool = mysql.createPool(dbConfig);

connection.connect(err => {
    if(err) {
        return console.log(`ERROR + ${err.message}`);
    }
    else {
        console.log('Connected to MySQL server!')
    }
});

// connection.query(`CREATE DATABASE Library`, (err, results) => {
//     if(err) console.log(err);
//     else console.log('DataBase is created');
// });

const sql = `CREATE TABLE Authors(
    id_author int auto_increment,
    country VARCHAR(30) NOT NULL,
    author VARCHAR(30) NOT NULL,
    )`;

connection.query(sql, (err, results) => {
    if(err) console.log(err);
    else console.log('TABLE is created');
});




// executor.getAll("employee");

// connect.end();
