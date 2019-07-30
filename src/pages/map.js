import React from 'react'
import Layout from '../components/layouts/default'
import { Map, GeoJSON, Popup, TileLayer } from 'react-leaflet'
import { graphql } from 'gatsby'

const MapPage = ({ data }) => (
  <Layout title="mocoloco" noHeadingMargin={true}>
    {typeof window !== 'undefined' && (
      <Map
        style={{ width: '100%', height: 'calc(100vh - 18px)' }}
        center={[36.3530149, -121.6947624]}
        zoom={9}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.allOutline.nodes.map(outline => (
          <GeoJSON data={JSON.parse(outline.outline)} />
        ))}
      </Map>
    )}
  </Layout>
)

export default MapPage

export const query = graphql`
  {
    allOutline(sort: { fields: [name] }) {
      nodes {
        outline
        name
      }
    }
  }
`
