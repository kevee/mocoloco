const contentfulManagement = require('contentful-management')

require('dotenv').config()

const client = contentfulManagement.createClient({
  accessToken: process.env.MOCOLOCO_FETCH_CONTENTFUL_MANAGEMENT_TOKEN,
})

module.exports = (agency, existing, spinner, agendas, done) => {
  spinner.tick('Creating contentful content')
  client
    .getSpace(process.env.MOCOLOCO_FETCH_CONTENTFUL_SPACE)
    .then(space => {
      return space.getEnvironment('master')
    })
    .then(environment => {
      spinner.tick('Fetched environment')
      let created = (skipped = 0)
      let i = 0
      const saveItem = () => {
        if (typeof agendas[i] === 'undefined') {
          spinner.tick(`Created ${created} items, skipped ${skipped} items`)
          done()
          return
        }
        spinner.tick(`Processing item ${i}`)

        const node = {
          fields: {
            hash: {
              'en-US': agendas[i].hash,
            },
            name: {
              'en-US': agendas[i].name,
            },
            agendaLink: {
              'en-US': agendas[i].agendaLink ? agendas[i].agendaLink : '',
            },
            minutesLink: {
              'en-US': agendas[i].minutesLink ? agendas[i].minutesLink : '',
            },
            videoLink: {
              'en-US': agendas[i].videoLink ? agendas[i].videoLink : '',
            },
            agendaPacketLink: {
              'en-US': agendas[i].agendaPacketLink
                ? agendas[i].agendaPacketLink
                : '',
            },
            dateTime: {
              'en-US': agendas[i].dateTime,
            },
          },
        }
        node.fields.agency = {
          'en-US': {
            sys: {
              linkType: 'Entry',
              id: agency.id,
            },
          },
        }
        if (existing.indexOf(agendas[i].hash) === -1) {
          environment
            .createEntry('agenda', node)
            .then(entry => {
              i++
              entry.publish()
              created++
              saveItem()
            })
            .catch(console.error)
        } else {
          skipped++
          i++
          saveItem()
        }
      }
      saveItem()
    })
}
