const path = require(`path`);
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityService {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your service posts`,
      result.errors
    );
    return;
  }

  result.data.allSanityService.edges.forEach((edge) => {
    createPage({
      path: `services/${edge.node.slug.current}`,
      component: require.resolve(`./src/template/service.js`),
      context: {
        current: edge.node.slug.current,
      },
    });
  });
};
