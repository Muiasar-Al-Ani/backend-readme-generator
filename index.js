// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your Projects name?",
  },
  {
    type: "input",
    name: "description",
    massage:
      "Please provide a short description explaining the what, why, and how of your project:",
  },
  {
    type: "input",
    name: "liveLink",
    massage:
      "Please provide a live link to your Project if it is deployed:",
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
    massage:
      "Please list all the technologies used in your Project separated by "/"!",
  },
  {
    type: "input",
    name: "screenShots",
    massage:
      "Please enter links to the screen shots of your Project separated by space!",
  },
  {
    type: "input",
    name: "video",
    massage:
      "Please enter a link to a video demo of your Project:",
  },
  {
    type: "input",
    name: "credits",
    message: "Does this Project has Contributors?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter your Project contribution guidelines:",
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
      "Eclipse Public License 1.0"

    ],
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test instructions:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), err => {
  err ? console.error(err) : console.log("Your Markdown file has been generated successfully!")
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    writeToFile('README.md', data)
  })
}

// Function call to initialize app
init();
