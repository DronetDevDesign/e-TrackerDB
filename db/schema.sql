DROP TABLE IF EXISTS departments;

DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS employees;

CREATE TABLE
  departments (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
  );

CREATE TABLE
  roles (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT
  );

CREATE TABLE
  employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
  );