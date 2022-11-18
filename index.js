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
        message: "What's the name or title of your project?"
    },
    {
        type: "input",
        name: "description1",
        message: "Describe what your project does:"
    },
    {
        type: "input",
        name: "description2",
        message: "Describe why you created this project or what problem it solves:"
    },
    {
        type: "input",
        name: "install",
        message: "Any Install Instructions?",
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
        message: "List any websites you referenced while creating this project:",
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
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "githublink",
        message: "Paste a link to your GitHUb profile here:"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email address?"
    },
];

//Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Function to initialize app
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
