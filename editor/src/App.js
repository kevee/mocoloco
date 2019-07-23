import React, { useState } from 'react'
import { Flex, Box } from '@rebass/grid'
import { Map, TileLayer, FeatureGroup, LeafletConsumer } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet/dist/leaflet.css'

const App = () => {
  const [data, setData] = useState([])
  const [showImport, setShowImport] = useState(false)
  const [currentEntry, setCurrentEntry] = useState({
    key: false,
    outline: {},
  })

  return (
    <div className="container">
      <Flex>
        <Box width={[1 / 2]}>
          <form>
            <div class="form-group">
              <label>Key</label>
              <input
                type="text"
                className="form-control"
                onChange={event => {
                  currentEntry.key = event.target.value
                  setCurrentEntry(currentEntry)
                }}
              />
            </div>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={event => {
                  currentEntry.name = event.target.value
                  setCurrentEntry(currentEntry)
                }}
              />
            </div>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={event => {
                  currentEntry.name = event.target.value
                  setCurrentEntry(currentEntry)
                }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={event => {
                event.preventDefault()
                data.push(currentEntry)
                setCurrentEntry({})
              }}
            >
              Add
            </button>
          </form>
        </Box>
        <Box width={[1 / 2]}>
          <Map
            style={{ height: '400px', width: '100%' }}
            center={[36.266564, -121.3292319]}
            zoom={8}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LeafletConsumer>
              {({ map }) => (
                <FeatureGroup>
                  <EditControl
                    position="topright"
                    draw={{
                      polygon: {
                        showArea: true,
                      },
                      rectangle: false,
                      circle: false,
                    }}
                    onCreated={event => {
                      currentEntry.outline = event.layer.toGeoJSON()
                      setCurrentEntry(currentEntry)
                    }}
                  />
                </FeatureGroup>
              )}
            </LeafletConsumer>
          </Map>
        </Box>
      </Flex>
      <form>
        <div className="field-group">
          <label>Data</label>
          <textarea
            className="form-control"
            style={{ height: '500px', fontFamily: 'monospace' }}
            value={JSON.stringify(data, null, 2)}
          />
        </div>
      </form>
      <button
        className="btn btn-primary"
        onClick={event => {
          setShowImport(!showImport)
        }}
      >
        Import data
      </button>
      {showImport && (
        <form>
          <div className="field-group">
            <label>Import data</label>
            <textarea
              className="form-control"
              onChange={event => {
                setData(JSON.parse(event.target.value))
              }}
            ></textarea>
          </div>
        </form>
      )}
    </div>
  )
}

export default App
