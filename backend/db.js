//////////////////////////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////////////////////////
/* Include to use .env file */
require('dotenv').config();

const mysql = require('mysql2')

//////////////////////////////////////////////////////////////////////////
// DATABASE_URL extracted from .env file
//////////////////////////////////////////////////////////////////////////
const connection = mysql.createConnection('mysql://eio6jkyy3wvjbb82snrn:pscale_pw_vGwbs1oursxq1f4zVIbhO6b3MpwW2yETGGTQ6CKdIKK@aws.connect.psdb.cloud/ades?ssl={"rejectUnauthorized":true}')
console.log("DB Connected", connection)
module.exports = connection;



// const mysql = require('mysql2');
// require('dotenv').config();



// const connection = mysql.createConnection({
//   host:'aws.connect.psdb.cloud',
//   port: 'eio6jkyy3wvjbb82snrn',
//   user: pr,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   ssl: {
//     rejectUnauthorized: true,

//   }

// });

// console.log("DB Connected", connection)
// module.exports = connection;
