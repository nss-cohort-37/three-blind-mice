import { useComputers } from "../computers/ComputerProvider.js"
import { useEmployees } from "./EmployeeProvider.js"
import Employee from "./Employee.js"
import { useDepartments } from "../departments/DepartmentProvider.js"
import { useLocations } from "../locations/LocationProvider.js"
import { useCustomers } from "../locations/CustomerProvider.js"
import { useEmployeeCustomers } from "../locations/EmployeeCustomerProvider.js"

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const computers = useComputers()
    const employees = useEmployees()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find the computer assigned to the employee
            const assignedComputer = computers.find(computer => computer.id === employee.computerId)

            // Find the department that the employee works in
            const department = departments.find(dept => dept.id === employee.departmentId)

            // Find the location that the employee works at
            const location = locations.find(loc => loc.id === employee.locationId)

            // Find all customer relationships for the current employee
            const customerRelationships = empCust.filter(ec => ec.employeeId === employee.id)

            // For each relationship, find the corresponding company
            const foundCustomersArray = customerRelationships.map(rc => {
                const foundCustomer = customers.find(customer => customer.id === rc.customerId)
                return foundCustomer
            })

            debugger

            const html = Employee(employee, assignedComputer, department, location, foundCustomersArray)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList