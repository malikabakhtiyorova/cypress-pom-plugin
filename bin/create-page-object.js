#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const replace = require('replace-in-file');

const args = process.argv.slice(2);
const pageName = args[0];
if (!pageName) {
  console.error('Please specify a page name.');
  process.exit(1);
}

const templatePath = path.join(__dirname, '../templates/pageObjectTemplate.js');
const pageObjectPath = path.join(
  __dirname,
  `../cypress/pageObjects/${pageName}.js`
);

fs.copyFile(templatePath, pageObjectPath, (err) => {
  if (err) throw err;

  replace.sync({
    files: pageObjectPath,
    from: /{{PageName}}/g,
    to: pageName,
  });

  console.log(`Page object ${pageName} created.`);
});
