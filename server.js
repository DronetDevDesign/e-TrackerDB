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
// db.query(`SELECT * FROM employees`, (err, rows) => {
//   console.log(rows);
// });

// GET a single employee:
db.query(`SELECT * FROM employees WHERE ID = 1`, (err, row) => {
  if (err) {
    console.log(err);
  }
  console.log(row);
});

// DELETE a single employee:
// db.query(`DELETE FROM employees WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// CREATE new employee:
const sql = `INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)`;
const params = [1, 'Robert', 'Bruce', 1, null];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
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