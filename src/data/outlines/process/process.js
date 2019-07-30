const fs = require('fs')

const input = JSON.parse(fs.readFileSync('in.json'))

const features = {}

input.features.forEach(feature => {
  if (typeof features[feature.properties.UNIT_NAME] === 'undefined') {
    features[feature.properties.UNIT_NAME] = []
  }
  features[feature.properties.UNIT_NAME].push(feature)
})

Object.keys(features).forEach(name => {
  fs.writeFileSync(
    name.replace('/', '-'),
    JSON.stringify({
      type: 'FeatureCollection',
      features: features[name],
    })
  )
})
