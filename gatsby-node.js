const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const creativeTemplate = path.resolve(`src/templates/creativeTemplate.js`)

  return graphql(
    `{
      allContentfulCreative {
        edges {
          node {
            path
            title
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    let paths = []
    result.data.allContentfulCreative.edges.forEach(({ node }) => {
      let { title, path } = node
      paths.push({ title, path })
    })

    result.data.allContentfulCreative.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: creativeTemplate,
        context: { paths, hello: 'World' } // additional data can be passed via context
      })
    })
  })
}
