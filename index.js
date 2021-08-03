// Include all packages needed for this application
// The inquirer package is needed to get user input from the terminal
const inquirer = require("inquirer");
// The fs package is needed to write a file to the file system
const fs = require("fs");
// The generateMarkdown.js is where most of our logic for the markdown
const generateMarkdown = require("./utils/generateMarkdown");

const questions = require("./utils/questions");

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
