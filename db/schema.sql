-- Active: 1660403566821@@127.0.0.1@3306@employee_db
DROP TABLE IF EXISTS departments;

DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS employees;

CREATE TABLE
    departments (
        id INTEGER PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    roles (
        id INTEGER PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL,
        department_id INTEGER 
    );

CREATE TABLE
    employees (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER,
        manager_id INTEGER
    );