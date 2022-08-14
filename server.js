const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");
const inputCheck = require('./utils/inputCheck');

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
app.get('/api/employees', (req, res) => {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// GET a single employee:
app.get('/api/employees/:id', (req, res) => {
  const sql = `SELECT * FROM employees WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// DELETE a single employee:
app.delete('/api/employees/:id', (req, res) => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found!'
      });
    } else {
      res.json({
        message: 'Employee deleted!',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

// CREATE new employee:
app.post('/api/employees', ({ body }, res) => {
  const errors = inputCheck(body, 'id', 'first_name', 'last_name', 'role_id', 'manager_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
  VALUES (?,?,?,?,?)`;
  const params = [body.id, body.first_name, body.last_name, body.role_id, body.manager_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
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