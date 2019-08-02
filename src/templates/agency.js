import React from 'react'
import Layout from '../components/layouts/default'
import { TextContainer } from '../components/common/container'
import PageHeader from '../components/common/page-title'
import { Flex, Box } from '@rebass/grid/emotion'
import { Map, GeoJSON, TileLayer, LeafletConsumer } from 'react-leaflet'
import { LeadParagraph, SectionTitle } from '../components/common/type'
import { ButtonAnchor } from '../components/common/button'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const AgencyInfoTitle = styled.h3`
  font-size: 1.1rem;
`

const AgencyType = styled.strong`
  font-size: 1.4rem;
`

const AgencyInfoFlex = styled(Flex)`
  margin-bottom: 1rem;
`

const AgencyPage = ({ pageContext }) => {
  const { agency } = pageContext
  return (
    <Layout title="mocoloco">
      <TextContainer>
        <PageHeader>{agency.name}</PageHeader>
        <p>
          <AgencyType>{agency.type.name}</AgencyType>
        </p>
        <LeadParagraph>{agency.description.description}</LeadParagraph>
        {agency.outline && <AgencyMap outline={agency.outline} />}
        <SectionTitle>Meetings</SectionTitle>
        {agency.meetingDescription && (
          <LeadParagraph>
            {agency.meetingDescription.meetingDescription}
          </LeadParagraph>
        )}
        {agency.meetingAgendasLink && (
          <AgencyInfoLink
            link={agency.meetingAgendasLink}
            linkTitle="View meeting agendas"
            title="Meeting agendas"
          />
        )}
        {agency.meetingMinutesLink && (
          <AgencyInfoLink
            link={agency.meetingMinutesLink}
            linkTitle="View meeting minutes"
            title="Meeting minutes"
          />
        )}
        {agency.members && (
          <>
            <SectionTitle>People</SectionTitle>
            {agency.members.map(position => (
              <AgencyInfo title={position.name}>
                <Link to={`/person/${position.person.slug}`}>
                  {position.person.name}
                </Link>
              </AgencyInfo>
            ))}
          </>
        )}
      </TextContainer>
    </Layout>
  )
}

const AgencyInfoLink = ({ link, title, linkTitle }) => (
  <AgencyInfo title={title}>
    <ButtonAnchor target="_blank" href={link}>
      {linkTitle}
    </ButtonAnchor>
  </AgencyInfo>
)

const AgencyInfo = ({ title, children }) => (
  <AgencyInfoFlex>
    <Box width={[1 / 3]} mr={3}>
      <AgencyInfoTitle>{title}</AgencyInfoTitle>
    </Box>
    <Box width={[2 / 3]}>{children}</Box>
  </AgencyInfoFlex>
)

const AgencyMap = ({ outline }) => (
  <Map
    style={{ width: '100%', height: '60vh' }}
    center={[36.3530149, -121.6947624]}
    zoom={9}
    onLayerAdd={event => {
      if (typeof event.layer.feature !== 'undefined') {
        event.target.fitBounds(event.layer.getBounds())
      }
    }}
  >
    <TileLayer
      url="https://api.mapbox.com/styles/v1/keveemiller/cjyra1vuc794c1cp458r449wt/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2ZWVtaWxsZXIiLCJhIjoiY2p5cjl0aWRvMDZmYjNjcHUzeDVwOHN3MCJ9.E-R7THevDHSXUosHYYQJwQ"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <LeafletConsumer>
      {context => <GeoJSON data={JSON.parse(outline.outline)} />}
    </LeafletConsumer>
  </Map>
)

export default AgencyPage
