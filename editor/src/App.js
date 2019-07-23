import React, { useState } from 'react'
import { Flex, Box } from '@rebass/grid'

const App = () => {
  const [data, setData] = useState({})
  const [showImport, setShowImport] = useState(false)
  const [currentEntry, setCurrentEntry] = useState(0)

  return (
    <div className="container">
      <Flex>
        <Box width={[1 / 2]}>
          <p>Moco</p>
        </Box>
        <Box width={[1 / 2]}>
          <p>Moco</p>
        </Box>
      </Flex>
      <form>
        <div className="field-group">
          <label>Data</label>
          <textarea className="form-control" value={JSON.stringify(data)} />
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
