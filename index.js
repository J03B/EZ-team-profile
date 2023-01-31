// Import employee classes and needed modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

// Define global variables and functions
const teamArray = [];
const idsTaken = [];
function notEmpty(response) {
    if (response !== '') {
        return true;
    }
    return 'Must contain at least one character';
}
function isNumber(response) {
    if (response.match(/\d/)) {
        return true;
    }
    return 'Must be a number';
}
function isEmail(response) {
    if (response.match(/\S+@\S+\.\S+/)) {
        return true;
    }
    return 'Must be a valid email address';
}

// Program startup and welcome
console.log("\nWelcome to the EZ Team Profile Builder. Let's get started!\n");

// Fucniton to load the program base
function init() {
    // Compile the team when finished
    function renderTeam() {

    }

    // Add an engineer to the team
    function addEngineer() {

    }

    // Add an Intern to the team
    function addIntern() {

    }

    // Choice to add another member of the team
    function addTeamMember() {

    }
    
    // Add manager 
    function addManager() {
        // Go through prompts to get manager information
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the team manager's name:",
                validate: (answer) => notEmpty(answer)
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the manager's id:",
                validate: (answer) => isNumber(answer)
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the manager's email address:",
                validate: (answer) => isEmail(answer)
            },
            {
                type: 'input',
                name: 'office',
                message: "Enter the manager's office number:",
                validate: (answer) => isNumber(answer)
            }
        ])

        // Evaluate responses to the prompts to create a Manager object
        .then((answers) => {
            const teamManager = new Manager(
                answers.id,
                answers.name,
                answers.email,
                answers.office
            );

            // Add the manager to the global arrays and prompt to add other team members
            teamArray.push(teamManager);
            idsTaken.push(answers.id);
            addTeamMember();
        });
    }

    // Initialize the init function by calling the addManager function
    addManager();
}

// Start the App!
init();