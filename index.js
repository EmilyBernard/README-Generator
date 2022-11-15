//Packages used in application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Array of questions for user input

const questions = [

    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "description1",
        message: "Describe what your project does:"
    },
    {
        type: "input",
        name: "description2",
        message: "Describe why you created this project:"
    },
    {
        type: "input",
        name: "deployed",
        message: "Paste the URL of your deployed project here:"
    },
    {
        type: "input",
        name: "install",
        message: "Any Install Instructions? (i.e. npm i)",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide an example of how the project can be used:",
    },
    {
        type: "input",
        name: "contributors1",
        message: "List your team members/collaborators, if any:",
    },
    {
        type: "input",
        name: "contributors2",
        message: "List any materials or websites you referenced while creating this project:",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run for tests?",
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["APACHE2.0", "Boost1.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating README...");
        writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
    }
    )
}

// Function call to initialize app
init();
