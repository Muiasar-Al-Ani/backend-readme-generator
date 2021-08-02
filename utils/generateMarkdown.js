// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let badge = "";
  switch (data) {
    case "MIT License":
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache 2.0 License":
      badge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "Boost Software License 1.0":
      badge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
      break;
    case "The Unlicense":
      badge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      break;
    case "The Perl License":
      badge = "https://img.shields.io/badge/License-Perl-0298c3.svg";
      break;
    case "The Artistic License 2.0":
      badge = "https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg";
      break;
    case "Mozilla Public License 2.0":
      badge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      break;
    case "ISC License (ISC)":
      badge = "https://img.shields.io/badge/License-ISC-blue.svg";
      break;
    case "Eclipse Public License 1.0":
      badge = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
      break;
    default:
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let badgeLink = "";
  switch (data) {
    case "MIT License":
      badgeLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0 License":
      badgeLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      badgeLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "The Unlicense":
      badgeLink = "http://unlicense.org/";
      break;
    case "The Perl License":
      badgeLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "The Artistic License 2.0":
      badgeLink = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case "Mozilla Public License 2.0":
      badgeLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "ISC License (ISC)":
      badgeLink = "https://opensource.org/licenses/ISC";
      break;
    case "Eclipse Public License 1.0":
      badgeLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    default:
      badgeLink = "";
  }
  return badgeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.licenses !== undefined) {
    let licenseBadges = "";
    for (var i = 0; i < data.licenses.length; i++) {
      licenseBadges += `[![License](${renderLicenseBadge(
        data.licenses[i]
      )})](${renderLicenseLink(data.licenses[i])})`;
    }
    return licenseBadges;
  } else {
    return "";
  }
}


function renderTechnologies(technologies) {
  let techRender = "";
  technologies.split("/").forEach(technology => {
    techRender += `- ${technology}.\s\s`
  })
}
function renderScreenShots (screenShots) {
  let screenShotRenders = "";
  screenShots.split(' ').forEach(screenShot => {
    screenShotRenders += ` ![ScreenShot](${screenShot})\s\s`
  }) 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  licences : ${renderLicenseSection(data)}\s

`;
}

module.exports = generateMarkdown;
