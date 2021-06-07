// const mysql = require('mysql2');
// const config = require('./config/config');

// const dbConfig = config.db;
// const connection = mysql.createConnection(dbConfig);
// const pool = mysql.createPool(dbConfig);

// connection.connect(err => {
//     if(err) {
//         return console.log(`ERROR + ${err.message}`);
//     }
//     else {
//         console.log('Connected to MySQL server!')
//     }
// });

// pool.query('SELECT field FROM table', (err, rows, fields)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(`ROWS: ${rows}`);
//     console.log(`FIELDS: ${fields}`);
// });

// connection.end( err => {
//     if(err){
//         return console.log(`ERROR + ${err.message}`);
//     }
//     else {
//         console.log('Connection is closed');
// }
// });

// const sql = `CREATE TABLE Authors(
//     id_author int auto_increment,
//     country VARCHAR(30) NOT NULL,
//     author VARCHAR(30) NOT NULL,
//     )`;

// connection.execute(sql, (err, results) => {
//     if(err) console.log(err);
//     else console.log('Database is created');
// });
