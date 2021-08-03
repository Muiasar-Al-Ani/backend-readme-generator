// Include all packages needed for this application
// The inquirer package is needed to get user input from the terminal
const inquirer = require("inquirer");
// The fs package is needed to write a file to the file system
const fs = require("fs");
// The generateMarkdown.js is where most of our logic for the markdown
const generateMarkdown = require("./utils/generateMarkdown");

//  An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your Projects name?",
  },
  {
    type: "input",
    name: "userName",
    message: "Please enter your GitHub user name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your Email address:",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a short description explaining the what, why, and how of your project:",
  },
  {
    type: "input",
    name: "liveLink",
    message: "Please provide a live link to your Project if it is deployed:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions for your Project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use:",
  },
  {
    type: "input",
    name: "technologies",
    message:
      "Please list all the technologies used in your Project separated by Comma!",
  },
  {
    type: "input",
    name: "screenShots",
    message:
      "Please enter links to the screen shots of your Project separated by a space!",
  },
  {
    type: "input",
    name: "video",
    message: "Please enter a link to a video demo of your Project:",
  },
  {
    type: "input",
    name: "creditors",
    message:
      "Please include the contributors GitHub userName of your Project separated by Comma!",
  },
  {
    type: "input",
    message: "Please provide any tests written for your application:",
    name: "test",
  },
  {
    type: "list",
    name: "contribution",
    message: "Are contribution, issues, and feature requests welcome?",
    choices: ["Yes", "No"],
  },
  {
    type: "checkbox",
    message: "Licensing Options",
    name: "licenses",
    choices: [
      "MIT License",
      "Apache 2.0 License",
      "The Unlicense",
      "Boost Software License 1.0",
      "The Perl License",
      "The Artistic License 2.0",
      "Mozilla Public License 2.0",
      "ISC License (ISC)",
      "Eclipse Public License 1.0",
    ],
  },
];

// This function writes README file and checking for errors
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
    err
      ? console.error(err)
      : console.log("Your Markdown file has been generated successfully!");
  });
}

// This function initializes the App
function init() {
  inquirer.prompt(questions).then(data => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
