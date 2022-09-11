// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your README",
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please explain how to install your program",
        },
        {
            type: "list",
            name:'license',
            message: 'What license are you using for this project?',
            choices: ['Apache', 'Boost', 'BSD', 'None']
        },
        {
            type: "input",
            name: "github-user",
            message: "What is your Github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your work email?",
        },
    ])
    .then((answers) => {
        fs.writeFile('README.md', generateMarkdown(answers) , (err) => {
            if(err) throw err;
            console.log('README.md created!')
        })
        console.log(answers)
    })

    
