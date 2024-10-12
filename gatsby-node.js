const fs = require('fs');
const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path === '/license/') {
    const licensePath = path.resolve(__dirname, 'LICENSE');
    let licenseContent = '';

    try {
      licenseContent = fs.readFileSync(licensePath, 'utf8');
    } catch (error) {
      console.error('Failed to read LICENSE file:', error);
    }

    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        licenseContent,
      },
    });
  }
};