const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryArticles {
      allDatoCmsArticle {
        nodes {
          title
          id
        }
      }
    }
  `);

  result.data.allDatoCmsArticle.nodes.forEach((post) => {
    createPage({
      path: `articles/${slugify(post.title, {
        lower: true,
      })}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};
