const agencyPages = require(`./src/node/agencies`)

exports.createPages = ({ stage, graphql, actions }) => {
  return new Promise((resolve, reject) => {
    agencyPages(graphql, actions).then(() => {
      resolve()
    })
  })
}
