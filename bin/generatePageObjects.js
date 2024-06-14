#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const pageName = args[0];
const pageUrl = args[1];

function generatePageObject(pageName, pageUrl) {
  if (!pageName) {
    console.error('Please specify a page name.');
    process.exit(1);
  }
  if (!pageUrl) {
    console.error('Please specify a page url.');
    process.exit(1);
  }

  // Current working directory
  const currentDir = process.cwd();

  // Directory path for page objects
  const pageObjectsDir = path.join(currentDir, 'cypress/pageObjects');

  // Ensure the directory exists, create it if it doesn't
  fs.mkdirSync(pageObjectsDir, { recursive: true });

  // Output path relative to the current directory
  const outputPath = path.join(pageObjectsDir, `${pageName}.js`);

  // Read the template file
  const templatePath = path.join(
    __dirname,
    '../templates/pageObjectTemplate.js'
  );
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
        console.log(
          `Page object ${pageName}.js created successfully in ${pageObjectsDir}.`
        );
      }
    });
  });
}

// Example usage
generatePageObject(pageName, pageUrl);
