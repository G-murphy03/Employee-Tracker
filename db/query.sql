SELECT roles.title, roles.id, departments.department_name, roles.salary 
FROM roles
INNER JOIN departments 
ON roles.departments_id=departments.id;

SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employees
INNER JOIN roles ON employees.roles_id=roles.id
INNER JOIN departments ON roles.departments_id=departments.id
LEFT JOIN employees manager on manager.id = employees.manager_id
ORDER BY employees.id;