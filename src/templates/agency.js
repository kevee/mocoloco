import React from 'react'
import Layout from '../components/layouts/default'
import { TextContainer } from '../components/common/container'
import PageHeader from '../components/common/page-title'
import { Map, GeoJSON, TileLayer, LeafletConsumer } from 'react-leaflet'
import { LeadParagraph, SectionTitle } from '../components/common/type'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { InfoPane, InfoLinkPane } from '../components/common/info-pane'
import { ServiceList } from '../components/common/services'

const AgencyType = styled.strong`
  font-size: 1.4rem;
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
        {agency.description && (
          <LeadParagraph>{agency.description.description}</LeadParagraph>
        )}
        {agency.outline && typeof window !== 'undefined' && (
          <AgencyMap outline={agency.outline} />
        )}
        {agency.services && (
          <>
            <SectionTitle>Services</SectionTitle>
            <ServiceList services={agency.services} agency={agency} />
          </>
        )}
        <SectionTitle>Meetings</SectionTitle>
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
        {agency.members && (
          <>
            <SectionTitle>People</SectionTitle>
            {agency.members.map(position => (
              <InfoPane title={position.name}>
                <Link to={`/person/${position.person.slug}`}>
                  {position.person.name}
                </Link>
              </InfoPane>
            ))}
          </>
        )}
      </TextContainer>
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

export default AgencyPage
