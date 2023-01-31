// Import the parent class of Employee first
const Employee = require('./Employee');

// Extend the employee class to Engineer
class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    // Engineer class property to return the user's GitHub ID
    getGithub() {
        return this.github;
    }

    // Override the role return with 'Engineer' instead of 'Employee'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;