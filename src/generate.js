const fs = require('fs');
const cheerio = require('cheerio');

const generatePageObject = (htmlContent, pageName) => {
  const $ = cheerio.load(htmlContent);
  const elements = $('input, button, select, textarea')
    .map((i, el) => {
      return {
        tag: el.tagName,
        id: $(el).attr('id'),
        class: $(el).attr('class'),
        name: $(el).attr('name'),
      };
    })
    .get();

  const pageObjectContent = `class ${pageName} {
    constructor() {
      this.selectors = ${JSON.stringify(elements, null, 2)};
    }
    // Methods to interact with the page
  }
  export default new ${pageName}();`;

  fs.writeFileSync(`../cypress/pageObjects/${pageName}.js`, pageObjectContent);
};

// Example usage
// generatePageObject('<html content>', 'ExamplePage');
