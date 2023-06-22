// DATABASE
// importamos modulo de mysql2
const mysql = require('mysql2');


const db_connection = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'proyecto',
  port: process.env.MYSQL_ADDON_PORT || 3306,
  connectionLimit: 10,
  multipleStatements: true 
});

module.exports = db_connection;