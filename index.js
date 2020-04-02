const fs = require("fs");
const inquirer = require("inquirer");

var inquirer = require("inquirer");
var fs = require("fs");

inquirer
    .prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "projName"
        }, {
            type: "input",
            message: "Give a brief description of your project.",
            name: "description"
        }, {
            type: "input",
            message: "What are your Table of Contents?",
            name: "contents"
        }, {
            type: "input",
            message: "What does your user need to install to use your project?",
            name: "install"
        }, {
            type: "input",
            message: "What is the use of your project?",
            name: "usage"
        }, {
            type: "input",
            message: "What is the license for your project?",
            name: "license"
        }, {
            type: "input",
            message: "Who contributed on this project?",
            name: "help"
        }, {
            type: "input",
            message: "What tests did you run on this project?",
            name: "test"
        }, {
            type: "input",
            message: "What tests did you run on this project?",
            name: "test"
        }, {
            type: "input",
            message: "What is your GitHub username?",
            name: "git"
        }
    ])
    .then(function (response) {
        const myREAME =
`this is where my readme skeleton will go`
        fs.writeFile("testREADME.md", myREAME, function (err) {
            if (err) {
                return console.log("whats wrong " + err)
            } else {
                return console.log("yeah")
            }
        })
    })