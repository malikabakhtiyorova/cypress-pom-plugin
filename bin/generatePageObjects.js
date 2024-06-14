#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const pageName = args[0];
const pathName = args[1];

function generatePageObject(pageName, pageUrl) {
  if (!pageName) {
    console.error('Please specify a page name.');
    process.exit(1);
  }
  if (!pageUrl) {
    console.error('Please specify a page url.');
    process.exit(1);
  }
  const templatePath = path.join(
    __dirname,
    '../templates/pageObjectTemplate.js'
  );
  const outputPath = path.join(
    __dirname,
    `../cypress/pageObjects/${pageName}.js`
  );

  // Read the template file
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template:', err);
      return;
    }

    // Replace placeholders with actual values
    const result = data
      .replace(/{{PageName}}/g, pageName)
      .replace(/{{pageUrl}}/g, pageUrl);

    // Write the result to the output file
    fs.writeFile(outputPath, result, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log(`Page object ${pageName}.js created successfully.`);
      }
    });
  });
}

// Example usage
generatePageObject(pageName, pathName);
