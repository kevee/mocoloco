import React from 'react'
import Layout from '../components/layouts/default'
import { Map, GeoJSON, Popup, TileLayer } from 'react-leaflet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

const MapElement = styled(Map)`
  width: 100%;
  height: 90vh;
`
const MapPage = ({ data }) => (
  <Layout title="mocoloco">
    {typeof window !== 'undefined' && (
      <MapElement center={[36.3530149, -121.6947624]} zoom={9}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.allOutline.nodes.map(outline => (
          <GeoJSON data={JSON.parse(outline.outline)} />
        ))}
      </MapElement>
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
