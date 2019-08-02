const report = require('gatsby-cli/lib/reporter')
const path = require('path')

module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const personTemplate = path.resolve(`src/templates/person.js`)
    resolve(
      graphql(
        `
          {
            allContentfulPerson {
              nodes {
                position {
                  agency {
                    name
                    slug
                  }
                  name
                }
                name
                email
                slug
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulPerson.nodes.forEach(person => {
          createPage({
            path: `person/${person.slug}`,
            component: personTemplate,
            context: {
              person: person,
            },
          })
        })
        report.success(`built individual person pages`)
        return
      })
    )
  })
}
