const mysql = require('mysql2/promise');

// const connection = mysql.createPool(process.env.URL_DB_MySql);

// URL_DB_MySql="mysql://root:root@localhost:3306/dbo"

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dbo"
})


module.exports = connection;