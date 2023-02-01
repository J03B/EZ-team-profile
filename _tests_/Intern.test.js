const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create an Intern object with consructor for id, name, email, and school", () => {
            const tstId = "1234";
            const tstName = "Joe Momma";
            const tstEmail = "joe.mom@AskJeeves.com";
            const tstSchool = 'University of Wisconsin - Madison';
            const Emp = new Intern(tstId, tstName, tstEmail, tstSchool);

            expect(Emp).toEqual({ id: tstId, name: tstName, email: tstEmail, school: tstSchool});
        });
    });

    describe('getId', () => {
        it("should return the Intern object's ID", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, school: school } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", school: "UW - Madison" };
            const Emp = new Intern(tstId, tstName, tstEmail, school);
            
            expect(Emp.getId()).toEqual(tstId);
        });
    });

    describe('getName', () => {
        it("should return the Intern object's Name", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, school: school } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", school: "UW - Madison" };
            const Emp = new Intern(tstId, tstName, tstEmail, school);
            
            expect(Emp.getName()).toEqual(tstName);
        });
    });
    
    describe('getEmail', () => {
        it("should return the Intern object's email", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, school: school } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", school: "UW - Madison" };
            const Emp = new Intern(tstId, tstName, tstEmail, school);
            
            expect(Emp.getEmail()).toEqual(tstEmail);
        });
    });
    
    describe('getSchool', () => {
        it("should return the Intern object's school", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, school: school } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", school: "UW - Madison" };
            const Emp = new Intern(tstId, tstName, tstEmail, school);
            
            expect(Emp.getSchool()).toEqual(school);
        });
    });

    describe('getRole', () => {
        it("should return the Intern object's Role", () => {
            const Emp = new Intern("123", "These dont matter", "123", "Dont matta");
            
            expect(Emp.getRole()).toEqual('Intern');
        });
    });
});