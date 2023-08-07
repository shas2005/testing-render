// //////////////////////////////////////////////////////////////////////////
// // INCLUDES
// //////////////////////////////////////////////////////////////////////////
// /* Include to use .env file */
// require('dotenv').config();

// const mysql = require('mysql2')

// //////////////////////////////////////////////////////////////////////////
// // DATABASE_URL extracted from .env file
// //////////////////////////////////////////////////////////////////////////
// const connection = mysql.createConnection(process.env.DATABASE_URL)
// console.log("DB Connected", connection)
// module.exports = connection;



const mysql = require('mysql2');
require('dotenv').config();



const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,

  }

});

console.log("DB Connected", connection)
module.exports = connection;
