INSERT INTO department (id, department_name) VALUES
  (1, 'Human Resources'),
  (2, 'IT Department'),
  (3, 'Finance');


INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'HR Manager', 70000, 1),
  (2, 'IT Specialist', 60000, 2),
  (3, 'Financial Analyst', 65000, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Bob', 'Johnson', 3, 1),
  (4, 'Alice', 'Williams', 2, 1),
  (5, 'Charlie', 'Brown', 3, 2);