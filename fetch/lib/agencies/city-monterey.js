const fetch = require('node-fetch')
const cheerio = require('cheerio')
const parseDate = require('../parse-date.js')
const getLink = require('../get-link')
const objectHash = require('node-object-hash')
const hasher = objectHash({ sort: true, coerce: true }).hash

const prefix = 'http://isearchmonterey.org'
const url =
  'http://isearchmonterey.org/OnBaseAgendaOnline/Meetings/Search?dropid=7&mtids=143%2C144%2C107%2C149%2C108%2C109%2C110%2C111'

module.exports = (agency, spinner, done) => {
  fetch(url)
    .then(response => {
      return response.text()
    })
    .then(html => {
      const $ = cheerio.load(html)
      const agendas = []
      spinner.tick('Fetched page')
      $('tr.meeting-row').each((i, row) => {
        const meeting = $(row)
        const item = {
          dateTime: parseDate(
            meeting.find('td:nth-child(3)').text(),
            'M/D/YYYY h:mm:ss A'
          ),
          name: meeting.find('td:nth-child(1)').text(),
          agendaLink: getLink($, meeting, 'Agenda', prefix),
          minutesLink: getLink($, meeting, 'Minutes', prefix),
          agendaPacketLink: getLink($, meeting, 'Agenda Packet', prefix),
        }
        item.hash = hasher(item)
        agendas.push(item)
      })
      spinner.tick(`Parsed ${agendas.length} agendas`)
      done(agendas)
    })
}
