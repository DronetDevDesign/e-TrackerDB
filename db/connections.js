const mysql = require("mysql2");

// connect to MySQL database -> 'employee_db':
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username is:
    user: 'root',
    // MySQL password is:
    password: 'Bu$$sawyer2022',
    database: 'employee_db'
  },
  console.log('Connected to the employee_db database.')
);

module.exports = db;