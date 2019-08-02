const agencyPages = require(`./src/node/agencies`)
const personPages = require(`./src/node/people`)
const servicePages = require(`./src/node/services`)

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
        resolve()
      })
  })
}
