const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an Engineer object with consructor for id, name, email, and GitHub", () => {
            const tstId = "1234";
            const tstName = "Joe Momma";
            const tstEmail = "joe.mom@AskJeeves.com";
            const githubID = 'J03B';
            const Emp = new Engineer(tstId, tstName, tstEmail, githubID);

            expect(Emp).toEqual({ id: tstId, name: tstName, email: tstEmail, github: githubID});
        });
        
    });

    describe('getId', () => {
        it("should return the Engineer object's ID", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, githubID: githubID } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", githubID: "J03B" };
            const Emp = new Engineer(tstId, tstName, tstEmail, githubID);
            
            expect(Emp.getId()).toEqual(tstId);
        });
    });

    describe('getName', () => {
        it("should return the Engineer object's Name", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, githubID: githubID } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", githubID: "J03B" };
            const Emp = new Engineer(tstId, tstName, tstEmail, githubID);
            
            expect(Emp.getName()).toEqual(tstName);
        });
    });
    
    describe('getEmail', () => {
        it("should return the Engineer object's email", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, githubID: githubID } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", githubID: "J03B" };
            const Emp = new Engineer(tstId, tstName, tstEmail, githubID);
            
            expect(Emp.getEmail()).toEqual(tstEmail);
        });
    });
    
    describe('getGithub', () => {
        it("should return the Engineer object's github", () => {
            const { tstId: tstId, tstName: tstName, tstEmail: tstEmail, githubID: githubID } = { tstId: "4321", tstName: "Mike Hanny", tstEmail: "myEmail@nope.com", githubID: "J03B" };
            const Emp = new Engineer(tstId, tstName, tstEmail, githubID);
            
            expect(Emp.getGithub()).toEqual(githubID);
        });
    });

    describe('getRole', () => {
        it("should return the Engineer object's Role", () => {
            const Emp = new Engineer("123", "These dont matter", "123", "Dont matta");
            
            expect(Emp.getRole()).toEqual('Engineer');
        });
    });
});