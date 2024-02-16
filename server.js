
const inquirer = require('inquirer');
const handler = require('./choiceHandler');



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
            {name: 'Exit'}
        ]
        
    }
];

const employeeQuestions = [
   
    {
        type: 'input',
        message: 'Enter the first name:',
        name: 'first_name',
    },
    {
        type: 'input',
        message: 'Enter the last name:',
        name: 'last_name',
    },
    {
        type: 'input',
        message: 'Enter the role ID:',
        name: 'role_id',
    },
    {
        type: 'input',
        message: 'Enter the manager ID (if applicable):',
        name: 'manager_id',
    },
    
];
const newRoleInfo = [
    {
        type: 'input',
        message: 'Enter employee id',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter new role id',
        name: 'role_id'
    }
]

const addRoleInfo = [
    {
        type: 'input',
        message: 'Enter Title: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter Salary: ',
        name: 'salary',
    },
    {
        type: 'input',
        message: 'Enter department_id: ',
        name: 'id',
    }
]

function init() {
    inquirer.prompt(options).then((response) => {
        
        handleInput(response);
    });
}

async function collectEmployeeData() {
    return await inquirer.prompt(employeeQuestions);
    
}

async function handleEmployeeData() {
    const {addEmployee} = handler;
    const employeeData = await collectEmployeeData();
    addEmployee(employeeData, (err, results) => {
        if (err) {
            console.error('Error adding employee:', err);
        } else {
            console.log('Employee added successfully.');
            console.log('\n \n');
            init();
        }
    });
}
async function collectNewRole() {
    return await inquirer.prompt(newRoleInfo);
}
async function handleNewRole() {
    const {changeEmployeeRole} = handler;
    const roleData = await collectNewRole();
    changeEmployeeRole(roleData.id,roleData.role_id, (err, results) => {
        if (err) {
            console.error('Error changing role:', err);
        } else {
            console.log('role changed successfully.');
            console.log('\n \n');
            init();
        }
    });
    
}

async function collectRoleInfo() {
    return await inquirer.prompt(addRoleInfo);
}
async function handleAddRole() {
    const {addRole} = handler;
    const roleData = await collectRoleInfo();
    addRole(roleData, (err, results) => {
        if (err) {
            console.error('Error changing role:', err);
        } else {
            console.log('role changed successfully.');
            console.log('\n \n');
            init();
        }
    });

}

function handleInput(data) {
    const userChoice = data.options;
    const {viewAllEmployees, addEmployee, viewAllRoles, viewAllDeparments} = handler;

    if (userChoice == 'View All Employees') {
        viewAllEmployees((err, results) => {
            if (err) {
                console.error('Error viewing all employees:', err);
            } else {
                console.table(results);
                console.log('\n \n');
                init();
            }
        });

        

    }
    else if (userChoice == 'Add Employee') {
        handleEmployeeData();
    }
    else if (userChoice == 'Update Employee Role') {
        handleNewRole();


    }
    else if (userChoice == 'View All Roles') {
        viewAllRoles((err, results) => {
            if (err) {
                console.error('Error viewing all roles: ', err);
            } else {
                console.table(results);
                console.log('\n \n');
                init();
            }
        });

    }
    else if (userChoice == 'Add Role') {
        handleAddRole();

    }
    else if (userChoice == 'View All Departments') {
        viewAllDeparments((err, results) => {
            if (err) {
                console.error('Error viewing all departments: ', err);
            } else {
                console.table(results);
                console.log('\n \n');
                init();
            }
        });
    }
    else if (userChoice == 'Exit') {
        process.exit;

    }
    else {
        console.log("Sorry something went wrong");
        init();
    }

}

init();