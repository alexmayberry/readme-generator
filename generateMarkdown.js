// Store license options information
licenseOptions = [{
  name: 'Apache-2.0',
  noSpaceName: 'Apache-2.0',
  color: 'blue',
  URL: 'https://opensource.org/licenses/Apache-2.0'
},
{
  name: 'GPL-3.0',
  noSpaceName: 'GPL-3.0',
  color: 'green',
  URL: 'https://opensource.org/licenses/GPL-3.0'
},
{
  name: 'MIT',
  noSpaceName: 'MIT',
  color: 'green',
  URL: 'https://opensource.org/licenses/MIT'
},
{
  name: 'Mozilla Public License 2.0',
  noSpaceName: 'MPL-2.0',
  color: 'blue',
  URL: 'https://opensource.org/licenses/MPL-2.0'
},
{
  name: 'CC0 1.0 Universal',
  noSpaceName: 'CC0-1.0-Universal',
  color: 'red',
  URL: 'https://creativecommons.org/publicdomain/zero/1.0/'
},
{
  name: 'No License',
  noSpaceName: 'No-License',
  color: 'lightgrey',
  URL: ''
},
]

// Create a function to generate markdown for README
function generateMarkdown(answers) {
  let licenseBadgeMd = ``;
  renderLicenseBadge(answers);
    // Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(answers) {
    const license = answers.license;
    for (let i = 0; i < licenseOptions.length; i++) {
      if (license === licenseOptions[i].name) {
      licenseBadgeMd =`[![License: ${license}](https://img.shields.io/static/v1?label=License&message=${licenseOptions[i].noSpaceName}&color=${licenseOptions[i].color})](${licenseOptions[i].URL})`;
       generateMarkdown(licenseBadgeMd);
      }
    }
  }

  return `
  # ${answers.title}

  ${licenseBadgeMd}

  ## Table of Contents

  [Author](#author) <br>
  [Contact](#contact-me) <br>
  [Deployed Page](#deployed-page) <br>
  [GitHub Repo](#github-repo) <br>
  [Project Description](#project-description)<br>
  [Video Walkthrough](#video-walkthrough)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Test Instructions](#testing)<br>
  [Contribution Guidelines](#contribution)<br>
  [Preview Image](#preview-image)<br>
  [Questions](#questions)<br>
 



  ## Author

  ${answers.author}

  ## Contact Me

  **Github:** [${answers.github}](https://github.io/${answers.github})

  **Email:** ${answers.email}

  **Website:** ${answers.website}

  ## Deployed Page
  
  ${answers.live}

  ## GitHub Repo

  [${answers.title}](https://github.io/${answers.github}/${answers.repo})

  ## Project Description

  ${answers.description}

  ## Video Walkthrough

  [Video Walkthrough](${answers.video})

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Testing

  ${answers.test}

  ## Contribution

  ${answers.contribute}

  ## Preview Image

  ![image](${answers.image})

  ## Questions

  ${answers.issues}


  `;
}

module.exports = generateMarkdown;
