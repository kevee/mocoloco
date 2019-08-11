const report = require('gatsby-cli/lib/reporter')
const path = require('path')

module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const serviceTypeTemplate = path.resolve(`src/templates/service-type.js`)
    resolve(
      graphql(
        `
          {
            allContentfulServiceType(
              sort: { fields: [name, service___agency___name] }
            ) {
              nodes {
                name
                slug
                service {
                  name
                  slug
                  agency {
                    name
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulServiceType.nodes.forEach(services => {
          createPage({
            path: `service-type/${services.slug}`,
            component: serviceTypeTemplate,
            context: {
              services: services,
            },
          })
        })
        report.success(`built service type pages`)
        return
      })
    )
  })
}
