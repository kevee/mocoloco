import React, { useState } from 'react'
import Layout from '../components/layouts/default'
import { Map, GeoJSON, Marker, TileLayer } from 'react-leaflet'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'
import styled from '@emotion/styled'
import Link from 'gatsby-link'
import { TextareaInput, FormSubmit } from '../components/common/forms'
import pointInPolygon from 'point-in-polygon'
import ListUnstyled from '../components/common/list-unstyled'
import colors from '../style/colors'

const SearchResultLink = styled(Link)`
  color: ${colors.primary.dark};
  text-decoration: none;
  border-bottom: ${colors.primary.muted} 1px solid;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
  display: block;
  h5 {
    margin-bottom: 0.2rem;
  }
`

const SearchResultDescription = styled.p`
  font-size: 0.8rem;
  color: ${colors.primary.muted};
  margin: 0;
`

const SearchBox = styled(Box)`
  height: 90vh;
  overflow-y: scroll;
`

const findCoordinates = coordinates => {
  let finalCoordinates = []
  const findChildCoordinate = coordinate => {
    if (coordinate.length > 3) {
      finalCoordinates = coordinate
      return
    }
    findChildCoordinate(coordinates[0])
  }
  findChildCoordinate(coordinates)
  return finalCoordinates
}

const inOutline = (location, outline) => {
  let features = JSON.parse(outline)
  const point = [location.lng, location.lat]
  let inside = false
  features.features.forEach(feature => {
    if (feature.type === 'Feature' && feature.geometry.type === 'Polygon') {
      if (
        pointInPolygon(point, findCoordinates(feature.geometry.coordinates))
      ) {
        inside = true
      }
    }
  })
  return inside
}

const getAgencies = data => {
  const agencies = []
  data.allContentfulAgency.nodes.forEach(agency => {
    data.allOutline.nodes.forEach(outline => {
      if (outline.name === agency.slug) {
        agency.outline = outline
      }
    })
    agencies.push(agency)
  })
  return agencies
}

const MapPage = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [location, setLocation] = useState(false)
  const [selectedAgency, setSelectedAgency] = useState(false)
  const agencies = getAgencies(data)

  return (
    <Layout title="mocoloco" noHeadingMargin={true}>
      <Flex>
        <Box width={[8 / 12]}>
          {typeof window !== 'undefined' && (
            <AgencyMap
              location={location}
              searchResults={searchResults}
              selectedAgency={selectedAgency}
            />
          )}
        </Box>
        <SearchBox width={[4 / 12]} px={3} mt={3}>
          <h2>Search</h2>
          <form
            onSubmit={event => {
              event.preventDefault()
              fetch(
                `https://api.opencagedata.com/geocode/v1/json?key=${data.site.siteMetadata.geolocation}&pretty=1&no_annotations=1&q=${searchQuery}`
              )
                .then(results => {
                  return results.json()
                })
                .then(locations => {
                  if (
                    locations &&
                    locations.results &&
                    locations.results.length
                  ) {
                    setLocation(locations.results[0].geometry)
                    const results = []
                    agencies.forEach(agency => {
                      if (!agency.outline) {
                        return
                      }
                      if (
                        inOutline(
                          locations.results[0].geometry,
                          agency.outline.outline
                        )
                      ) {
                        results.push(agency)
                      }
                    })
                    results.sort((a, b) => {
                      return a.name.toLowerCase().trim() <
                        b.name.toLowerCase().trim()
                        ? -1
                        : 1
                    })
                    setSearchResults(results)
                  } else {
                    setLocation(false)
                  }
                })
            }}
          >
            <label>Street address</label>
            <TextareaInput
              type="text"
              id="search-map"
              aria-label="Street address"
              onChange={event => {
                setSearchQuery(event.target.value)
              }}
            ></TextareaInput>
            <div>
              <FormSubmit value="Search" />
            </div>
          </form>
          {searchResults && (
            <SearchResults
              searchResults={searchResults}
              selectedAgency={selectedAgency}
              setSelectedAgency={agency => {
                setSelectedAgency(agency)
              }}
            />
          )}
        </SearchBox>
      </Flex>
    </Layout>
  )
}

const AgencyMap = ({ location, searchResults, selectedAgency }) => (
  <Map
    style={{ width: '100%', height: 'calc(100vh - 18px)' }}
    center={[36.3530149, -121.6947624]}
    zoom={9}
  >
    <TileLayer
      url="https://api.mapbox.com/styles/v1/keveemiller/cjyra1vuc794c1cp458r449wt/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2ZWVtaWxsZXIiLCJhIjoiY2p5cjl0aWRvMDZmYjNjcHUzeDVwOHN3MCJ9.E-R7THevDHSXUosHYYQJwQ"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {location && (
      <>
        <Marker position={[location.lat, location.lng]} />
        {searchResults.map((agency, index) => (
          <GeoJSON
            key={agency.name}
            data={JSON.parse(agency.outline.outline)}
            style={() => {
              const colorIndex =
                index < 10 ? index : parseInt(index.toString().substr(-1, 1))

              return {
                color: colors.mapItems[colorIndex],
                fill:
                  selectedAgency && selectedAgency.id === agency.id
                    ? true
                    : false,
                fillOpacity: 0.8,
              }
            }}
          ></GeoJSON>
        ))}
      </>
    )}
  </Map>
)

const SearchResults = ({ searchResults, setSelectedAgency }) => (
  <ListUnstyled>
    {searchResults.map(result => (
      <li key={result.slug}>
        <SearchResultLink
          onMouseEnter={event => {
            setSelectedAgency(result)
          }}
          onMouseLeave={event => {
            setSelectedAgency(false)
          }}
          to={`/agency/${result.slug}`}
        >
          <h5>{result.name}</h5>
          <SearchResultDescription>{result.type.name}</SearchResultDescription>
        </SearchResultLink>
      </li>
    ))}
  </ListUnstyled>
)

export default MapPage

export const query = graphql`
  {
    site {
      siteMetadata {
        geolocation
      }
    }
    allOutline(sort: { fields: [name] }) {
      nodes {
        outline
        name
      }
    }
    allContentfulAgency(sort: { fields: [name] }) {
      nodes {
        id
        name
        slug
        type {
          id
          name
          slug
        }
        issues {
          id
          name
        }
      }
    }
  }
`
