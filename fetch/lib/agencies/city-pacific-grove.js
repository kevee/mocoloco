const fetch = require('node-fetch')
const cheerio = require('cheerio')
const parseDate = require('../parse-date.js')
const getLink = require('../get-link')
const moment = require('moment')
const objectHash = require('node-object-hash')
const hasher = objectHash({ sort: true, coerce: true }).hash

const prefix = 'https://destinyhosted.com/'
const url = (year, month) => {
  return `https://destinyhosted.com/agenda_publish.cfm?mt=CC&get_month=${month}&get_year=${year}&countDownload=&downloadFile=&id=72243&loc=&term=N`
}

module.exports = (agency, spinner, done) => {
  const agendas = []
  const now = moment()
  const end = moment().add(1, 'year')
  const run = () => {
    fetch(url(now.format('YYYY'), now.format('M')))
      .then(response => {
        return response.text()
      })
      .then(html => {
        const $ = cheerio.load(html)
        spinner.tick(
          `Fetched City of Pacific Grove page for ${now.format('YYYY-MM')}`
        )
        $('#list tbody tr').each((i, row) => {
          const meeting = $(row)
          const item = {
            dateTime: parseDate(
              meeting.find('td:nth-child(1)').text(),
              'MMMM D, YYYY'
            ),
            name: meeting.find('td:nth-child(2)').text(),
            agendaLink: prefix + meeting.find('td:nth-child(1) a').attr('href'),
            minutesLink:
              prefix + meeting.find('td:nth-child(3) a').attr('href'),
            videoLink: meeting.find('td:nth-child(4) a').attr('href'),
          }
          item.hash = hasher(item)
          agendas.push(item)
        })
        spinner.tick(`Parsed ${agendas.length} agendas`)
        now.add(1, 'month')
        if (now.isBefore(end)) {
          run()
        } else {
          done(agendas)
        }
      })
  }
  run()
}
