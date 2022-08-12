-- DEPARTMENT: 
-- id: INT PRIMARY KEY
-- name: VARCHAR(30) - holds departments name

-- ROLE:
-- id: INT PRIMARY KEY
-- title: VARCHAR(30) - to hold role title
-- salary: DECIMAL - to hold salary 
-- department_id: INT - to hold reference to department role belongs to 

-- EMPLOYEE: 
-- id: INT PRIMARY KEY
-- first_name: VARCHAR(30) - to hold the employee first name
-- last_name: VARCHAR(30) - to hold the employee last name
-- role_id: INT - to hold reference to employee role
-- manager_id: INT - to hold reference to another employee that is the manager of the current employee (
                  -- null if the employee has no manager)