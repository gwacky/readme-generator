// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //MIT GNU license
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';
  }
  if (license === 'None') {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }
  if (license === 'GNU') {
    return '(http://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'None') {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
  ### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  ### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
  ### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  }
  if (license === 'GNU') {
    return `
  ## Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>

  ## Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
    `;
  }
  if (license === 'None') {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ${renderLicenseBadge(data.license)}

  ## Description

  ### ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Test](#tests)
  5. [Questions](#questions)
  6. [License](#license)

  ## Installation <a id="installation"></a>

  ### ${data.installation}

  ## Usage <a id="usage"></a>

  ### ${data.usage}

  ## Contributing <a id="contributing"></a>

  ### ${data.contributors}

  ## Tests <a id="tests"></a>

  ### ${data.test}

  ## Questions <a id="questions"></a>

  ### If you have any questions, please email: ${data.email}
  ### Visit my GitHub! github.com/${data.username}

  ## License <a id="license"></a>
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
