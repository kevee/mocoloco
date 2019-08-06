const report = require('gatsby-cli/lib/reporter')
const path = require('path')

module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const serviceTemplate = path.resolve(`src/templates/service.js`)
    resolve(
      graphql(
        `
          {
            allContentfulService {
              nodes {
                type {
                  name
                  slug
                }
                slug
                name
                link
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                agency {
                  slug
                  name
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulService.nodes.forEach(service => {
          if (
            typeof service.agency !== 'undefined' &&
            typeof service.agency[0] !== 'undefined'
          ) {
            createPage({
              path: `agency/${service.agency[0].slug}/service/${service.slug}`,
              component: serviceTemplate,
              context: {
                service: service,
              },
            })
          }
        })
        report.success(`built individual service pages`)
        return
      })
    )
  })
}
