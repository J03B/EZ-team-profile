// Employee class - parent class for other classes
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Employee class property to return their id
    getId() {
        return this.id;
    }
    
    // Employee class property to return their name
    getName() {
        return this.name;
    }

    // Employee class property to return their email
    getEmail() {
        return this.email;
    }

    // Employee class property to return their role - hard set as 'Employee'
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;