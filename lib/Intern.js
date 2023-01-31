// Import the parent class of Employee first
const Employee = require('./Employee');

// Extend the employee class to Intern
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    // Class property to return the intern's school they attend
    getSchool() {
        return this.school;
    }

    // Override the role return with 'Intern' instead of 'Employee'
    getRole() {
        return 'Intern';
    }
}