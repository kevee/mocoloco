const fs = require('fs')

const input = JSON.parse(fs.readFileSync('in.json'))

const features = {}

input.features.forEach(feature => {
  if (typeof features[feature.properties.FIRE_DIST] === 'undefined') {
    features[feature.properties.FIRE_DIST] = []
  }
  features[feature.properties.FIRE_DIST].push(feature)
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
