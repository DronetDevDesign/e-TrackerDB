const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");

// Express middleware:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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

// return ALL data from employees table:
db.query(`SELECT * FROM employees`, (err, rows) => {
  console.log(rows);
});

// test connection:
app.get('/', (req, res) => {
  res.json({
    message: 'Hello Ron!'
  });
});

// Default response for any other request (Not Found):
app.use((req, res) => {
  res.status(404).end();
});



// PORT listening:
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});