// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Create an array of questions for user input
inquirer
.prompt([
    {
    type: 'list',
    message: 'What is your project licensed as?',
    choices: ['Apache-2.0', 'GPL-3.0', 'MIT', 'Mozilla Public License 2.0', 'CC0 1.0 Universal', 'No License'],
    name: 'license',
    },
    {
    type: 'input',
    message: 'Add author name',
    name: 'author',
    },
    {
    type: 'input',
    message: 'Add author email',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is your github.com username?',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your website URL?',
    name: 'website',
    },
    {
    type: 'input',
    message: 'What is the project name',
    name: 'title',
    },
    {
      type: 'input',
      message: 'Add project description',
      name: 'description',
    },  
    {
    type: 'input',
    message: 'Add the project repo name',
    name: 'repo',
    },
    {
    type: 'input',
    message: 'Add the project live link',
    name: 'live',
    },
    {
    type: 'input',
    message: 'Add installation instructions',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Add usage instructions',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Add testing instructions',
    name: 'test',
    },
    {
    type: 'input',
    message: 'Add constribution instructions',
    name: 'contribute',
    },
    {
    type: 'input',
    message: 'Add preview image URL',
    name: 'image',
    },
    {
    type: 'input',
    message: 'Add video-walkthrough link',
    name: 'video',
    },
    {
    type: 'input',
    message: 'Add instructions for questions and issues. Please use .md syntax for links aka [linked text](link)',
    name: 'issues',
    },
])

// // Create a function to write README file
// function writeToFile(fileName, data) {}
.then((answers) => {
    console.log(answers);
    let mdContent = generateMarkdown(answers);
    fs.writeFile('README.md', mdContent, (err) => 
  err ? console.log(err) : console.log('Success! A README was created')
);
}
);
