// Import the parent class of Employee first
const Employee = require('./Employee');

// Extend the employee class to Manager
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    // Override the role return with 'Manager' instead of 'Employee'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;