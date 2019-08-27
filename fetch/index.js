const report = require('yurnalist')
const contentfulDelivery = require('contentful')
const runImport = require('./lib/run-import')

require('dotenv').config()

const deliveryClient = contentfulDelivery.createClient({
  space: process.env.MOCOLOCO_FETCH_CONTENTFUL_SPACE,
  accessToken: process.env.MOCOLOCO_FETCH_CONTENTFUL_DELIVERY_API
})

report.info('Fetching agency info from Contentful')

deliveryClient
  .getEntries({
    content_type: 'agency',
    'fields.fetchKey[exists]': true
  })
  .then(entries => {
    const agencies = []
    entries.items.forEach(entry => {
      agencies.push({
        id: entry.sys.id,
        fetchKey: entry.fields.fetchKey,
        name: entry.fields.name
      })
    })
    deliveryClient
      .getEntries({
        content_type: 'agenda'
      })
      .then(existing => {
        const existingAgendas = []
        existing.items.forEach(entry => {
          existingAgendas.push(entry.fields.hash)
        })

        runImport(agencies, existingAgendas)
      })
  })
  .catch(error => {
    console.log(error)
  })
