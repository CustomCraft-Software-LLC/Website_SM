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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = require.resolve(`./src/templates/product.js`);

  const result = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error('Error querying Shopify products:', result.errors);
    return;
  }

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: productTemplate,
      context: {
        handle: node.handle,
      },
    });
  });
};