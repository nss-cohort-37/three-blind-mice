const Employee = (employee, computer, department, location, customers) => {
    return `
        <section class="product">
            <header>
                <h2>${employee.firstName} ${employee.lastName}</h2>
            </header>
            <div>
                Using the ${computer.year} ${computer.model} computer
            </div>
            <div>
                Works in the ${department.name} department
            </div>
            <div>
                Located in the ${location.city} office
            </div>
            <div>
                <h1>Currently working for...</h1>
                <ol>
                    ${
                        customers.map(c => {
                            return `<li>${c.businessName}</li>`
                        }).join("")
                    }
                </ol>
            </div>
        </section>
    `
}

export default Employee
