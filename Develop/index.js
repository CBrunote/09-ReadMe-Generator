// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the tile of your project?", 
        name: 'title',
    },
    {
        type: 'input',
        message: "Provide a description of your project",
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide any installation instructions for your users.',
        name: 'installation',
        deafult: 'npm i',
    },
    {
        type: 'input',
        message: 'Provide usage information for your users.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide any contributers to the project.',
        name: 'contributers', 
    },
    {
        type: 'input',
        message: 'Provide any test instructions for the project.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose any licenses you used',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Provide your github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Provide your email address',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        })
}

// Function call to initialize app
init();
