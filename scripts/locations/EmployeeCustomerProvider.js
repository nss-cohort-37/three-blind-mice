let employeeCustomers = []

export const useEmployeeCustomers = () => employeeCustomers.slice()

export const getEmployeeCustomers = () => fetch("http://localhost:8088/employeeCustomers")
    .then(res => res.json())
    .then(parsedemployeeCustomers => employeeCustomers = parsedemployeeCustomers)
