INSERT INTO departments (names)
VALUES (Sales), (Engineering), (Finance), (Legal);

INSERT INTO roles (title, salary, department_id)
VALUE ('Sales Lead', 100000, 1), ('Salesperson', 80000, 1), ('Lead Engineer', 150000, 2), ('Software Engineer', 120000, 2), ('Account Manager', 160000, 3), ('Accountant', 125000, 3), ('Legal Team Lead', 250000, 4), ('Lawyer', 190000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUE (
    1, 'Robert', 'Bruce', 1, NULL
  ), (
    2, 'Anne', 'Radcliffe', 1, 1
  ), (
    3, 'Charles', 'Brown', 2, NULL
  ), (
    4, 'Eliza', 'Parsons', 2, 2
  ), (
    5, 'Susan', 'Hill', 3, NULL
  ), (
    6, 'Sydney', 'Owenson', 3, 3
  ), (
    7, 'Lisa', 'Crackanthorpe', 4, NULL
  ), (
    8, 'Hubert ', 'Carleton', 4, 4
  );