const mysql = require('mysql2');
const inquirer = require('inquirer');

const options = [
    {
        type: 'checkbox',
        message: 'What would you like to do?',
        name: 'options',
        choices: [
            {name: 'View All Employees'},
            {name: 'Add Employee'},
            {name: 'Update Employee Role'},
            {name: 'View All Roles'},
            {name: 'Add Role'},
            {name: 'View All Departments'},
        ]
        
    }
];

function init() {
    inquirer.prompt(options).then((response) => {
        handleInput(response);
    });
}

function handleInput(data) {
    const {userChoice} = data;

    if (userChoice == 'View All Employees') {

    }
    else if (userChoice == 'Add Employee') {

    }
    else if (userChoice == 'Update Employee Role') {

    }
    else if (userChoice == 'View All Roles') {

    }
    else if (userChoice == 'Add Role') {

    }
    else if (userChoice == 'View All Departments') {
        
    }

}