import React from 'react'
import Layout from '../components/layouts/default'
import { Container } from '../components/common/container'
import PageHeader from '../components/common/page-title'
import { Flex, Box } from '@rebass/grid/emotion'
import { Map, GeoJSON, TileLayer } from 'react-leaflet'

const AgencyPage = ({ pageContext }) => {
  const { agency } = pageContext
  return (
    <Layout title="mocoloco">
      <Container>
        <PageHeader>{agency.name}</PageHeader>
        <Flex>
          <Box width={[3 / 4]}></Box>
          <Box width={[1 / 4]}>
            {agency.outline && <AgencyMap outline={agency.outline} />}
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

const AgencyMap = ({ outline }) => (
  <Map
    style={{ width: '100%', height: 'calc(100vh - 18px)' }}
    center={[36.3530149, -121.6947624]}
    zoom={9}
  >
    <TileLayer
      url="https://api.mapbox.com/styles/v1/keveemiller/cjyra1vuc794c1cp458r449wt/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2ZWVtaWxsZXIiLCJhIjoiY2p5cjl0aWRvMDZmYjNjcHUzeDVwOHN3MCJ9.E-R7THevDHSXUosHYYQJwQ"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <GeoJSON data={JSON.parse(outline.outline)} />
  </Map>
)

export default AgencyPage
