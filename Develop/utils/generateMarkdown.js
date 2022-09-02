// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseLink = license.split(" ").join("%20")

  return `![${license}](https://img.shields.io/badge/license-${licenseLink}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)`
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

${license}

---

## Badges

${renderLicenseBadge(license)}

`
  } else {
    return '';
  }
}

// TODO: Create a function to genercdate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributers}

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions

If you have any questions visit my github at ${data.username} or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
