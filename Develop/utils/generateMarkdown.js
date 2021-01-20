// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  * [Github User](#username)
  * [Description](#Description)
  * [Project](#project)
  * [Usage](#usage)
  * [Tools](#tools)
  * [License](#license)
  * [Roadmap](#roadmap)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Github User
  ${data.username}

  ## Project

  ${data.project}

  ## Decription
  
  ${data.description}
  
  ## Usage

  ${data.usage}

  ## Tools

  The following tools were used in the development of this project:
  ${data.tools}

  ## License

  ${data.license}

  ## Roadmap

  ${data.roadmap}

  ## Contributions

  ${data.contribution}
  
  ## Tests

  ${data.tests}

  ## Questions

  Please email all questions to ${data.questions}.

  `
    ;
}

module.exports = generateMarkdown;

