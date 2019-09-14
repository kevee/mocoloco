const report = require('gatsby-cli/lib/reporter')
const path = require('path')

module.exports = (graphql, actions) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const meetingTemplate = path.resolve(`src/templates/meeting.js`)
    resolve(
      graphql(
        `
          {
            allContentfulAgenda {
              nodes {
                agency {
                  name
                  slug
                }
                id
                minutesLink
                videoLink
                agendaLink
                agendaPacketLink
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulAgenda.nodes.forEach(item => {
          createPage({
            path: `agency/${item.agency.slug}/meeting/${item.id}`,
            component: meetingTemplate,
            context: {
              agenda: item,
              agency: item.agency,
            },
          })
        })
        report.success(`built individual agency pages`)
        return
      })
    )
  })
}
