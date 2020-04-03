const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt([{
        type: "input",
        message: "What is the title of your project?",
        name: "project"
    }, {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description"
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
        message: "What is your GitHub username?",
        name: "git"
    }])
    .then(function (response) {

        const {
            project,
            description,
            install,
            usage,
            license,
            help,
            test,
            git
        } = response;

        
        const myREADME =
            `

            # ** ${project} **
            ---
            ## Description
            ${description}
            ---
            ## Table of Contents
            *[Description](#description)
            *[Installation](#installation)
            *[Contributors](#contributors)
            ---
            ## Installation Guide
            ${install}
            ---
            ## Usage for My Project
            ${usage}
            ---
            ## ${license}
            ---
            ## Contributors and Help
            ${help}
            ---
            ## Tests
            ${test}
            ---
            ## GitHub
            ${git}
            ---
            
            `
        fs.writeFile("testREADME.md", myREADME, function (err) {
            if (err) {
                return console.log("We did not process your request " + err);
            } else {
                return console.log("Enjoy your new README!");
            }
        })
    });