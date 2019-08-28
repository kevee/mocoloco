const report = require('gatsby-cli/lib/reporter')
const path = require('path')
const moment = require('moment')

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
                homepage
                slug
                agenda {
                  id
                  name
                  dateTime(formatString: "MMMM D, YYYY")
                  dateTimeFromNow: dateTime(fromNow: true)
                  dateTimeStamp: dateTime(formatString: "X")
                  videoLink
                  minutesLink
                  agendaLink
                  agendaPacketLink
                }
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                meetingAgendasLink
                meetingMinutesLink
                meetingDescription {
                  meetingDescription
                }
                meetingGeolocation {
                  lat
                  lon
                }
                meetingAddress {
                  meetingAddress
                  childMarkdownRemark {
                    html
                  }
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
          let agendas = []
          const currentTimestamp = moment().unix()
          if (agency.agenda) {
            agency.agenda.forEach(agenda => {
              if (agenda.dateTimeStamp > currentTimestamp) {
                agendas.push(agenda)
              }
            })
          }
          if (agendas.length) {
            agendas = agendas.sort((a, b) => {
              if (a.dateTimeStamp < b.dateTimeStamp) {
                return -1
              }
              if (a.dateTimeStamp > b.dateTimeStamp) {
                return 1
              }
              return 0
            })
          }
          agendas = agendas.slice(0, 5)
          createPage({
            path: `agency/${agency.slug}`,
            component: agencyTemplate,
            context: {
              agency: agency,
              agendas: agendas,
            },
          })
        })
        report.success(`built individual agency pages`)
        return
      })
    )
  })
}
