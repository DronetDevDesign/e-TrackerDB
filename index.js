const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./db/connections');

// OPTIONS ARRAY:
const options = [
  {
    type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add An Employee",
      "Udate Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit"
    ],
  },
]

// VIEW ALL EMPLOYEES:
const viewAllEmployees = () => {
  connection.query('SELECT * FROM employees', (error, results) => {
    if (error) console.error(error);
    console.log(cTable.getTable(results));
    mainMenu();
  })
}

// ADD AN EMPLOYEE:
const addNewEmployee = () => {
  connection.query('SELECT * FROM roles', (error, results) => {
    if (error) console.error(error);
    inquirer.prompt([{
      type: "input",
      question: "What is the new employees first name?",
      name: "firstName"
    },
    {
      type: "input",
      question: "What is the new employees last name?",
      name: "lastName"
    },
    {
      type: "input",
      question: "What is the manager id?",
      name: "managerId"
    },
    {
      type: "list",
      name: "role",
      message: "What is the role?",
      choices: results.map(role => {
        return { name: role.title, value: role.id }
      })
    }
    ])
      .then((answers) => {
        connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", "${answers.role}", "${answers.managerId}")`, (error, results) => {
          if (error) console.error(error);
          console.log("You successfully added an employee!");
          mainMenu();
        })
      })
  })
}

// UPDATE EMPLOYEE ROLE:
const updateEmployeeRole = () => {
  let idValueForEmployee = "";
  connection.query('SELECT * FROM employees', (error, results) => {
    const employeeChoices = results.map(({ id, first_name, last_name }) => ({
      name: `${first_name}, ${last_name}`,
      value: id
    }))
    if (error) console.error(error);
    inquirer.prompt([{
      type: "list",
      name: "options",
      message: "Which employee would you like to update?",
      choices: employeeChoices
    }
    ])
      .then((answers) => {
        idValueForEmployee = answers.options;
        connection.query('SELECT * FROM roles', (error, results) => {
          const roleChoices = results.map(({ id, title }) => ({
            name: title,
            value: id
          }))
          inquirer.prompt([{
            type: "list",
            name: "options",
            message: "What role would you like to assign to the employee?",
            choices: roleChoices
          }
          ])
            .then((answers) => {
              connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [idValueForEmployee, answers.options], (error, answers) => {
                if (error) console.error(error);
                console.log("You successfully added an employee role!");
                mainMenu();
              })
            })
        })
      })
  })
}

// VIEW ALL ROLES:
const viewAllRoles = () => {
  connection.query('SELECT * FROM roles', (error, results) => {
    if (error) console.error(error);
    console.log(cTable.getTable(results));
    mainMenu();
  })
}

// ADD ROLE:
const addRole = () => {
  connection.query('SELECT * FROM roles', (error, results) => {
    if (error) console.error(error);
    inquirer.prompt([{
      type: "input",
      question: "What is the title of the new role?",
      name: "title"
    },
    {
      type: "input",
      question: "What is the salary of the new role?",
      name: "salary"
    },
    {
      type: "input",
      question: "What is the department id of the new role?",
      name: "departmentId"
    }
    ])
      .then((answers) => {
        connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${answers.title}", "${answers.salary}", "${answers.departmentId}")`, (error, results) => {
          if (error) console.error(error);
          console.log("You successfully added a role!");
          mainMenu();
        })
      })
  })
}

// VIEW ALL DEPARTMENTS:
const viewAllDepartments = () => {
  connection.query('SELECT * FROM departments', (error, results) => {
    if (error) console.error(error);
    console.log(cTable.getTable(results));
    mainMenu();
  })
}

// ADD DEPARTMENT:
const addDepartment = () => {
  connection.query('SELECT * FROM departments', (error, results) => {
    if (error) console.error(error);
    inquirer.prompt([{
      type: "input",
      question: "What is the name of the new department?",
      name: "name"
    }
    ])
      .then((answers) => {
        connection.query(`INSERT INTO departments (name) VALUES ("${answers.name}")`, (error, results) => {
          if (error) console.error(error);
          console.log("You successfully added a department!");
          mainMenu();
        })
      })
  })
}

// FUNCTION TO INITIALIZE APP:
function mainMenu() {
  inquirer.prompt(options)
    .then((answers) => {
      if (answers.options === "View All Employees") {
        viewAllEmployees();
      }
      else if (answers.options === "Add An Employee") {
        addNewEmployee();
      }
      else if (answers.options === "Udate Employee Role") {
        updateEmployeeRole();
      }
      else if (answers.options === "View All Roles") {
        viewAllRoles();
      }
      else if (answers.options === "Add Role") {
        addRole();
      }
      else if (answers.options === "View All Departments") {
        viewAllDepartments();
      }
      else if (answers.options === "Add Department") {
        addDepartment();
      }
      else if (answers.options === "Quit") {
        console.log("YOU HAVE COMPLETED YOUR TASK!");
      }
    })
    .catch((error) => {
      if (error.isTypeError) {
        throw new Error('TypeError' + error.message);
      } else {
        throw new Error(error);
      }
    });
}

// INITIALIZE APP:
// In the command line type: "npm start"
mainMenu();