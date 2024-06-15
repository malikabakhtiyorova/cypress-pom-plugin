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
  const pageObjectsDir = path.join(currentDir, 'cypress/pages/actions');

   const pageTestsDir = path.join(currentDir, 'cypress/integration/tests');

  const pageLocatorsDir = path.join(currentDir, 'cypress/pages/locators');

  const pageDataDir = path.join(currentDir, 'cypress/data');

  // Ensure the directory exists, create it if it doesn't
  fs.mkdirSync(pageObjectsDir, { recursive: true });
  fs.mkdirSync(pageDataDir, { recursive: true });
  fs.mkdirSync(pageLocatorsDir, { recursive: true });
  fs.mkdirSync(pageTestsDir, { recursive: true });

  // Output path relative to the current directory
  const outputPathPageObjects = path.join(pageObjectsDir, `${pageName}.page.js`);

  const outputPathPageTests = path.join(pageTestsDir, `${pageName}.test.js`);

  const outputPathPageLocators = path.join(
    pageLocatorsDir,
    `${pageName}.page.locators.js`
  );

  const outputPathPageData = path.join(pageDataDir, `${pageName}.data.json`);

  // Read the template file
  const templatePathPageObjects = path.join(
    __dirname,
    '../templates/pageObjectTemplate.js'
  );

  const templatePathPageTests = path.join(
    __dirname,
    '../templates/pageTestTemplate.js'
  );

  const templatePathPageLocators = path.join(
    __dirname,
    '../templates/pageLocatorTemplate.js'
  );

   const templatePathPageData = path.join(
     __dirname,
     '../templates/pageDataTemplate.json'
   );
  fs.readFile(templatePathPageObjects, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template:', err);
      return;
    }

    // Replace placeholders with actual values
    const result = data
      .replace(/{{PageName}}/g, pageName)
      .replace(/{{pageUrl}}/g, pageUrl);

    // Write the result to the output file
    fs.writeFile(outputPathPageObjects, result, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log(
          `Page Object ${pageName}.page.js created successfully in ${pageObjectsDir}.`
        );
      }
    });
  });

  fs.readFile(templatePathPageData, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template:', err);
      return;
    }

    // Replace placeholders with actual values
    const result = data
      .replace(/{{PageName}}/g, pageName)
      .replace(/{{pageUrl}}/g, pageUrl);

    // Write the result to the output file
    fs.writeFile(outputPathPageData, result, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log(
          `Page Data ${pageName}.data.json created successfully in ${pageDataDir}.`
        );
      }
    });
  });

  fs.readFile(templatePathPageLocators, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template:', err);
      return;
    }

    // Replace placeholders with actual values
    const result = data
      .replace(/{{PageName}}/g, pageName)
      .replace(/{{pageUrl}}/g, pageUrl);

    // Write the result to the output file
    fs.writeFile(outputPathPageLocators, result, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log(
          `Page Locators ${pageName}.page.locators.js created successfully in ${pageLocatorsDir}.`
        );
      }
    });
  });

  fs.readFile(templatePathPageTests, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template:', err);
      return;
    }

    // Replace placeholders with actual values
    const result = data
      .replace(/{{PageName}}/g, pageName)
      .replace(/{{pageUrl}}/g, pageUrl);

    // Write the result to the output file
    fs.writeFile(outputPathPageTests, result, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log(
          `Page Test ${pageName}.test.js created successfully in ${pageTestsDir}.`
        );
      }
    });
  });
}

// Example usage
generatePageObject(pageName, pageUrl);

//pom:
//pages/actions/renamed.page.js
//data/filename.data.js
//pages/locators/renamed.page.locators.js

//integration/tests/renamed.test.js

//baseclass generate if not exists