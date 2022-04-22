// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

    inquirer
    .prompt([
  {
    type: "input",
    message: "What's your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description about your project.",
    name: "description",
  },
  {
    type: "checkbox",
    message: "What kind of license does your project have? ",
    choices: ['MIT'],
    name: "license",
  },
  {
    type: "input",
    message: "What command should I run to install dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run for tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does your user need to know about using the repo?",
    name: "repo",
  },
  {
    type: "input",
    message: "Who contributed to the repo?",
    name: "contribution",
  },
])
    .then((data) => {
        return generateMarkdown(data);
    })
    .then(data => {
        return writeToFile(data);
    });





// TODO: Create a function to write README file
const writeToFile = data => {
  fs.writeFile(`readme.md`,data, (err) =>
    err ? console.log(err) : console.log("Success!")
    
  );
}
// TODO: Create a function to initialize app
function init() {
    
}


// Function call to initialize app
init();
