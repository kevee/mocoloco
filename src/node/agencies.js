const report = require('gatsby-cli/lib/reporter')
const path = require('path')

module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const agencyTemplate = path.resolve(`src/templates/agency.js`)
    resolve(
      graphql(
        `
          {
            allOutline(sort: { fields: [name] }) {
              nodes {
                outline
                name
              }
            }
            allContentfulAgency(sort: { fields: [name] }) {
              nodes {
                id
                name
                slug
                description {
                  description
                }
                meetingAgendasLink
                meetingMinutesLink
                meetingDescription {
                  meetingDescription
                }
                members {
                  name
                  person {
                    name
                    slug
                  }
                }
                type {
                  id
                  name
                  slug
                }
                issues {
                  id
                  name
                }
                services {
                  name
                  slug
                  link
                  description {
                    childMarkdownRemark {
                      html
                    }
                  }
                  type {
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
        const agencies = []
        result.data.allContentfulAgency.nodes.forEach(agency => {
          result.data.allOutline.nodes.forEach(outline => {
            if (outline.name === agency.slug) {
              agency.outline = outline
            }
          })
          agencies.push(agency)
        })
        agencies.forEach(async agency => {
          createPage({
            path: `agency/${agency.slug}`,
            component: agencyTemplate,
            context: {
              agency: agency,
            },
          })
        })
        report.success(`built individual agency pages`)
        return
      })
    )
  })
}
