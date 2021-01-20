//declaring the dependecies and variables 
const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require("util");
const generateMarkdown =require(`./utils/generateMarkdown.js`);


// array of questions for user
const questions = [
    {
        message: "Provide your user name for Github.",
        name: "username",
        type:"input",
    },
    {
        message: `What is the name of your project?`,
        name:"project",
        type: "input",

    },
    {
        messages: "What tools did you use?",
        name: "tools",
        type:"checkbox",
        choices: [
            " HTML", " CSS", " Bootstrap 4", " JavaScript", " jQuery", " API's", " AJAX", " JSON", " Node.js"
        ]
    },
    {
        message:"What license would you like to use?",
        name: "license",
        type: "list",
        choices:["Apache license 2.0", "Mozilla Public License 2.0", "ETroya License", "The Unliense", "MIT"]
    },
    {
        message: "Describe your project?",
        name:"description",
        type: "input"
    },
    {
        messages: "How do you plan to improve your work?",
        name:"roadmap",
        type:"input"
    },
   
    {
        message: "How do you use the program.",
        name: "usage",
        type: "input",
    },
    {
        message: "Did anyone else contribute to the project?",
        name: `contribution`,
        type: "input",
    },
    {
        message: "Was there any testing involved with this project",
        name:"tests",
        type:"input"
    },
    {
        message: "Provide an email address for any further questions.",
        name: `questions`,
        type: `input`,
    },

]

function init(){
    inquirer.prompt(questions).then(answers => {
        console.log("Answer", answers);
        const markdown = generateMarkdown(answers);
        fs.writeFile(`ReadMe.md`, markdown, ()=> {console.log("ReadMe Completed!")})
    })
}
init ();