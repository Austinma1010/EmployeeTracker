const mysql = require('mysql2');
require('dotenv').config();


function viewAllEmployees(callback) {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          
          user: process.env.USER,
          
          password: process.env.PASSWORD,
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      ); 
    const query = 'SELECT * FROM employee';
    db.query(query, function (err, results) {
        if (err) {
            console.error('Error executing the query:', err);
            return callback(err, null);
        }
        
        callback(null, results);
        db.end();
          
    })
};

function addEmployee(data, callback) {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          
          user: process.env.USER,
          
          password: process.env.PASSWORD,
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      ); 
      const query = 'INSERT INTO employee SET ?';
    db.query(query, data, function (err, results) {
        if (err) {
            console.error('Error executing the query:', err);
            return callback(err, null);
        }
        
        callback(null, results);
        db.end();
          
    })

}
function viewAllRoles(callback) {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          
          user: process.env.USER,
          
          password: process.env.PASSWORD,
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      ); 
    const query = 'SELECT * FROM role';
    db.query(query, function (err, results) {
        if (err) {
            console.error('Error executing the query:', err);
            return callback(err, null);
        }
        
        callback(null, results);
        db.end();
          
    })
}
function viewAllDeparments(callback) {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          
          user: process.env.USER,
          
          password: process.env.PASSWORD,
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      ); 
    const query = 'SELECT * FROM department';
    db.query(query, function (err, results) {
        if (err) {
            console.error('Error executing the query:', err);
            return callback(err, null);
        }
        
        callback(null, results);
        db.end();
          
    })
}
function changeEmployeeRole(employeeId, newRoleId, callback) {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          
          user: process.env.USER,
          
          password: process.env.PASSWORD,
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      ); 
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    const values = [newRoleId, employeeId];
    db.query(query, values, function (err, results) {
        if (err) {
            console.error('Error executing the query:', err);
            return callback(err, null);
        }
        
        callback(null, results);
        db.end();
          
    })

}
function addRole(roleData, callback) {
    const db = mysql.createConnection(
        {
          host: 'localhost',
          
          user: process.env.USER,
          
          password: process.env.PASSWORD,
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      ); 
    const query = 'INSERT INTO role SET ?';
    db.query(query, roleData, function (err, results) {
        if (err) {
            console.error('Error executing the query:', err);
            return callback(err, null);
        }
        
        callback(null, results);
        db.end();
          
    })

}
module.exports = { viewAllEmployees, addEmployee, viewAllRoles, viewAllDeparments, changeEmployeeRole, addRole };
