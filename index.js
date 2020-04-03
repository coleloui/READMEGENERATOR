const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");


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
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "git"
        }
    ])
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

        const gitHub = "https://github.com/" + git;
        const gitAPI = "https://api.github.com/users/" + git;

        axios
            .get(gitAPI).then(function (response) {
                const pic = response.data.avatar_url;
                let userEmail = response.data.email;
                if (response.data.email == null) {
                    userEmail = "No user email";
                };

                const myREADME =
                    `
        
# **${project}** 

![badge](https://img.shields.io/badge/license-${license}-brightgreen)
---
## Description
${description}
---
## Table of Contents
*[Description](#description)

*[Installation](#installation)

*[GitHub](#github)
---
## Installation
${install}
---
## Usage for My Project
${usage}
---
## Contributors and Help
${help}
---
## Tests
${test}
---
## GitHub
![user github pic](${pic})


${gitHub}


${userEmail}
---
                    
                    `
                makeReadMe(myREADME);
            })

        function makeReadMe(myREADME) {
            fs.writeFile("README.md", myREADME, function (err) {
                if (err) {
                    return console.log("We did not process your request " + err);
                } else {
                    return console.log("Enjoy your new README!");
                }
            })
        }
    });