-- Active: 1660403566821@@127.0.0.1@3306@employee_db
INSERT INTO departments (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES (
    'Sales Lead', 100000, 1
  ), (
    'Salesperson', 80000, 1
  ), (
    'Lead Engineer', 150000, 2
  ), (
    'Software Engineer', 120000, 2
  ), (
    'Account Manager', 160000, 3
  ), (
    'Accountant', 125000, 3
  ), (
    'Legal Team Lead', 250000, 4
  ), (
    'Lawyer', 190000, 4
  );

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES (
    'Robert', 'Bruce', 1, NULL
  ), (
    'Anne', 'Radcliffe', 1, 1
  ), (
    'Charles', 'Brown', 2, NULL
  ), (
    'Eliza', 'Parsons', 2, 2
  ), (
    'Susan', 'Hill', 3, NULL
  ), (
    'Sydney', 'Owenson', 3, 3
  ), (
    'Lisa', 'Crackanthorpe', 4, NULL
  ), (
    'Hubert ', 'Carleton', 4, 4
  );