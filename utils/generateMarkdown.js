// Function generates markdown for README in .dist folder
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  \`\`\`
  ${data.description1}
  ${data.description2}
  \`\`\`

  ## Table of Contents

  * [Installations](#installations)

  * [Usage](#usage)
  
  * [Contributors](#contributors)
  
  * [Test](#test)

  * [Questions](#questions)

  ${renderLink(data.license)}
  <br>

## Installations

To install run these commands:

\`\`\`
${data.install}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`

## Contributors
\`\`\`
${data.contributors1}
${data.contributors2}
\`\`\`

## Test

To run tests, use these commands:

\`\`\`
${data.test}
\`\`\`

${renderSection(data.license)}
${renderBadge(data.license)}
<br>

## Questions

Contact me if you have any questions about my projct:

My GitHub Username: ${data.github}<br> 
My GitHub Profile:  ${data.githublink}
  
My email: ${data.email}


`;
}



// Function returns a license badge based on license user chooses. If there is no license, returns an empty string
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// Function returns the license link. If there is no license, returns an empty string
function renderLink(license) {
  if (license !== "None") {
    return (
    `\n* [License](#license)\n`
    )
}
return ''
}

//Function returns the license section of README. If there is no license, returns an empty string
function renderSection(license) {
  if (license !=="None") {
    return (
      `## License 
      
      Copyright © ${license}. All rights reserved.
      
      Licensed under the ${license} license.`
    )
  }
  return ''
}



module.exports = generateMarkdown;
