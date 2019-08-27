const fetch = require('node-fetch')
const cheerio = require('cheerio')
const parseDate = require('../parse-date.js')
const moment = require('moment')
const rssParser = require('rss-parser')
const objectHash = require('node-object-hash')
const hasher = objectHash({ sort: true, coerce: true }).hash

const url =
  'http://www.ci.seaside.ca.us/RSSFeed.aspx?ModID=58&CID=Public-Meetings-42'

module.exports = (agency, spinner, done) => {
  fetch(url)
    .then(response => {
      return response.text()
    })
    .then(html => {
      spinner.tick(`Fetched City of Seaside RSS feed`)
      const parser = new rssParser({
        customFields: {
          item: [
            ['calendarEvent:EventDates', 'eventDate'],
            ['calendarEvent:EventTimes', 'eventTime'],
          ],
        },
      })
      parser.parseString(html).then(feed => {
        const agendas = []
        feed.items.forEach(feedItem => {
          const item = {
            dateTime: parseDate(
              `${feedItem.eventDate.trim()} ${feedItem.eventTime
                .split('-')
                .shift()
                .trim()}`,
              'MMMM D, YYYY h:mm A'
            ),
            name: feedItem.title,
            agendaLink: feedItem.link,
          }
          item.hash = hasher(item)
          agendas.push(item)
        })

        done(agendas)
      })
    })
}
