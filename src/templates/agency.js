import React from 'react'
import Layout from '../components/layouts/default'
import { Container } from '../components/common/container'
import PageHeader from '../components/common/page-title'
import { Map, GeoJSON, TileLayer, Marker } from 'react-leaflet'
import { LeadParagraph, SectionTitle } from '../components/common/type'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { InfoPane, InfoLinkPane } from '../components/common/info-pane'
import { ServiceList } from '../components/common/services'
import { Flex, Box } from '../components/common/grid'
import Address from '../components/common/address'
import { ButtonAnchor } from '../components/common/button'
import ExternalLink from '../components/common/external-link'

const AgencyType = styled.strong`
  font-size: 1.4rem;
`

const AgencyDescription = styled.div`
  font-size: 1.2rem;
`

const AgencyPage = ({ pageContext }) => {
  const { agency } = pageContext
  return (
    <Layout title={agency.name}>
      <Container>
        <Flex>
          <Box width={[1, 2 / 3]} pr={[0, 3]}>
            <PageHeader>{agency.name}</PageHeader>
            <p>
              <AgencyType>{agency.type.name}</AgencyType>
            </p>
            {agency.description && agency.description.childMarkdownRemark && (
              <AgencyDescription
                dangerouslySetInnerHTML={{
                  __html: agency.description.childMarkdownRemark.html,
                }}
              ></AgencyDescription>
            )}
            {agency.homepage && (
              <ButtonAnchor
                target="_blank"
                rel="nofollow noopener"
                href={agency.homepage}
              >
                Visit website <ExternalLink />
              </ButtonAnchor>
            )}
          </Box>
          <Box width={[1, 1 / 3]}>
            {agency.outline && typeof window !== 'undefined' && (
              <AgencyMap outline={agency.outline} />
            )}
          </Box>
        </Flex>

        {agency.services && (
          <>
            <SectionTitle>Services</SectionTitle>
            <ServiceList services={agency.services} agency={agency} />
          </>
        )}
        <SectionTitle>Meetings</SectionTitle>
        <Flex>
          <Box width={[1, 2 / 3]} pr={[0, 3]}>
            {agency.meetingDescription && (
              <LeadParagraph>
                {agency.meetingDescription.meetingDescription}
              </LeadParagraph>
            )}
            {agency.meetingAgendasLink && (
              <InfoLinkPane
                link={agency.meetingAgendasLink}
                linkTitle="View meeting agendas"
                title="Meeting agendas"
              />
            )}
            {agency.meetingMinutesLink && (
              <InfoLinkPane
                link={agency.meetingMinutesLink}
                linkTitle="View meeting minutes"
                title="Meeting minutes"
              />
            )}
          </Box>
          <Box width={[1, 1 / 3]}>
            {agency.meetingGeolocation && typeof window !== 'undefined' && (
              <MeetingLocationMap location={agency.meetingGeolocation} />
            )}
            {agency.meetingAddress && (
              <Address
                dangerouslySetInnerHTML={{
                  __html: agency.meetingAddress.childMarkdownRemark.html.replace(
                    /(?:\r\n|\r|\n)/g,
                    '<br/>'
                  ),
                }}
              />
            )}
            {agency.meetingAddress && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${agency.meetingAddress.meetingAddress.replace(
                  /(?:\r\n|\r|\n)/g,
                  ','
                )}`}
              >
                Get directions
              </a>
            )}
          </Box>
        </Flex>

        {agency.members && (
          <>
            <SectionTitle>People</SectionTitle>
            {agency.members.map(position => (
              <InfoPane key={position.person.slug} title={position.name}>
                <Link to={`/person/${position.person.slug}`}>
                  {position.person.name}
                </Link>
              </InfoPane>
            ))}
          </>
        )}
      </Container>
    </Layout>
  )
}

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
    <GeoJSON data={JSON.parse(outline.outline)} />
  </Map>
)

const MeetingLocationMap = ({ location }) => (
  <Map
    style={{ width: '100%', height: '250px' }}
    center={[location.lat, location.lon]}
    zoom={15}
  >
    <TileLayer
      url="https://api.mapbox.com/styles/v1/keveemiller/cjyra1vuc794c1cp458r449wt/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2ZWVtaWxsZXIiLCJhIjoiY2p5cjl0aWRvMDZmYjNjcHUzeDVwOHN3MCJ9.E-R7THevDHSXUosHYYQJwQ"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[location.lat, location.lon]} />
  </Map>
)

export default AgencyPage
