const inquirer = require('inquirer');
const fs  = require('fs');

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
            if(answer===choices[0]) {
                
            } else if(answer===choices[1]){

            } else if (answer===choices[2]){

            }
        })
}