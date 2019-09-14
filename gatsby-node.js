const agencyPages = require('./src/node/agencies')
const personPages = require('./src/node/people')
const servicePages = require('./src/node/services')
const serviceTypePages = require('./src/node/service-types')
const meetingPages = require('./src/node/meetings')

exports.createPages = ({ stage, graphql, actions }) => {
  return new Promise((resolve, reject) => {
    agencyPages(graphql, actions)
      .then(() => {
        return personPages(graphql, actions)
      })
      .then(() => {
        return servicePages(graphql, actions)
      })
      .then(() => {
        return meetingPages(graphql, actions)
      })
      .then(() => {
        return serviceTypePages(graphql, actions)
      })
      .then(() => {
        resolve()
      })
  })
}
