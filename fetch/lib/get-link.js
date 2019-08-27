module.exports = ($, element, linkText, prefix) => {
  let link = false

  element.find('a').each((i, item) => {
    if (
      $(item)
        .text()
        .trim() === linkText
    ) {
      link = $(item).attr('href')
    }
  })

  if (link && link.search(/http(s?):\/\//) === -1) {
    link = prefix + link
  }

  return link
}
