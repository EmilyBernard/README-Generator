// Function returns a license badge based on license user chooses. If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// Function returns the license link. If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
    `\n* [License](#license)\n`
    )
}
return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
