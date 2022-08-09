const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs  = require('fs');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_tracker'
});

connection.connect(err => {
  if (err) throw err;
  afterConnection();
});

// function after connection is established and welcome image shows 
afterConnection = () => {
  console.log("***********************************")
  console.log("*                                 *")
  console.log("*        EMPLOYEE MANAGER         *")
  console.log("*                                 *")
  console.log("***********************************")
  init();
};

function init() {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            }
        ])
        .then((answer) => {
            const { options } = answer; 
            if(options==='View All Employees') {
                viewAllEmployees();
            } else if(options==='Add Employee'){

            } else if (options==='Update Employee Role'){

            } else if (options==='View All Roles'){

            } else if (options==='Add Role'){

            } else if (options==='View All Departments'){

            } else if (options==='Add Department'){

            } else {
                connection.end();
            }
        })
}

const viewAllEmployees = () => {
    console.log('Showing all employees...\n'); 
    const sql = `SELECT employee.id, 
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.name AS department,
                      role.salary, 
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee`;
    connection.promise().query(sql)
    .then( (rows) => {
    console.table(rows);
    init();
    })
    .catch(console.error('error'))
    .then( () => connection.end());
};

