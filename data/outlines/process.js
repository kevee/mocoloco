const fs = require('fs')

const input = JSON.parse(fs.readFileSync('in.json'))

const features = {}

input.features.forEach(feature => {
  if (typeof features[feature.properties.current_id] === 'undefined') {
    features[feature.properties.current_id] = []
  }
  features[feature.properties.current_id].push(feature)
})

Object.keys(features).forEach(name => {
  fs.writeFileSync(
    name,
    JSON.stringify({
      type: 'FeatureCollection',
      features: features[name],
    })
  )
})
