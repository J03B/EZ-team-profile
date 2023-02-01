const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an Employee object with consructor for id, name, and email", () => {
            const tstId = "1234";
            const tstName = "Joe Momma";
            const tstEmail = "joe.mom@AskJeeves.com";
            const Emp = new Employee(tstId, tstName, tstEmail);

            expect(Emp).toEqual({ id: tstId, name: tstName, email: tstEmail});
        });
    });

    describe('getId', () => {
        it("should return the Employee object's ID", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com" };
            const Emp = new Employee(tstId, tstName, tstEmail);
            
            expect(Emp.getId()).toEqual(tstId);
        });
    });

    describe('getName', () => {
        it("should return the Employee object's Name", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com" };
            const Emp = new Employee(tstId, tstName, tstEmail);
            
            expect(Emp.getName()).toEqual(tstName);
        });
    });

    
    describe('getEmail', () => {
        it("should return the Employee object's email", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com" };
            const Emp = new Employee(tstId, tstName, tstEmail);
            
            expect(Emp.getEmail()).toEqual(tstEmail);
        });
    });
    
    describe('getRole', () => {
        it("should return the Employee object's Role", () => {
            const Emp = new Employee("123", "These dont matter", "123");
            
            expect(Emp.getRole()).toEqual('Employee');
        });
    });

});