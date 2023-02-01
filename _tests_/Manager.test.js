const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create a Manager object with consructor for id, name, email, and office number", () => {
            const tstId = "1234";
            const tstName = "Joe Momma";
            const tstEmail = "joe.mom@AskJeeves.com";
            const tstOffice = '3519';
            const Emp = new Manager(tstId, tstName, tstEmail, tstOffice);

            expect(Emp).toEqual({ id: tstId, name: tstName, email: tstEmail, officeNumber: tstOffice});
        });
    });

    describe('getId', () => {
        it("should return the Manager object's ID", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, office: office } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", office: "B945" };
            const Emp = new Manager(tstId, tstName, tstEmail, office);
            
            expect(Emp.getId()).toEqual(tstId);
        });
    });

    describe('getName', () => {
        it("should return the Manager object's Name", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, office: office } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", office: "B945" };
            const Emp = new Manager(tstId, tstName, tstEmail, office);
            
            expect(Emp.getName()).toEqual(tstName);
        });
    });
    
    describe('getEmail', () => {
        it("should return the Manager object's email", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, office: office } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", office: "B945" };
            const Emp = new Manager(tstId, tstName, tstEmail, office);
            
            expect(Emp.getEmail()).toEqual(tstEmail);
        });
    });
    
    describe('getOfficeNumber', () => {
        it("should return the Manager object's school", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, office: office } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", office: "B945" };
            const Emp = new Manager(tstId, tstName, tstEmail, office);
            
            expect(Emp.getOfficeNumber()).toEqual(office);
        });
    });

    describe('getRole', () => {
        it("should return the Intern object's Role", () => {
            const Emp = new Manager("123", "These dont matter", "123", "Dont matta");
            
            expect(Emp.getRole()).toEqual('Manager');
        });
    });
});