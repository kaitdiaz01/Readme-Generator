// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n * [License](#) \n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    This project is licensed under ${license}.`;
  }
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Credits](#Credits)
- [Test](#Test)
- [Questions](#Questions)


## Installation

In order to install this use npm install

${data.dependencies}

## Usage

${data.repo}
   
![screenshot](.assets/Images/readmescreenshot.png)
   
## License 

${renderLicenseSection(data.license)}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you wish to see my work you can view my github at https://github.com/${data.github}.

## Test

If you wish to run tests use the command below

Use ${data.tests}

## Questions

If you have any questions contact me at ${data.email} and `;
}

module.exports = generateMarkdown;
