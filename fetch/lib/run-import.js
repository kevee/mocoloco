const report = require('yurnalist')
const agencyFetchers = require('./agencies')
const createContent = require('./create-content')

module.exports = (agencies, existing) => {
  report.info(`Found ${agencies.length} agencies with fetch keys`)

  let current = 0

  const runAgency = () => {
    if (typeof agencies[current] === 'undefined') {
      return
    }
    const agency = agencies[current]
    const spinner = report.activity()
    spinner.tick(`Fetching ${agency.name} agendas`)
    agencyFetchers[agency.fetchKey](agency, spinner, results => {
      report.success(`Fetched ${results.length} items`)
      createContent(agency, existing, spinner, results, () => {
        spinner.end()

        current++
        runAgency()
      })
    })
  }

  runAgency()
}
