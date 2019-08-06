import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import { TextContainer } from '../components/common/container'
import { SectionTitle, LeadParagraph } from '../components/common/type'
import { InfoPane } from '../components/common/info-pane'
import { Link } from 'gatsby'

const PersonTemplate = ({ pageContext }) => (
  <Layout title={pageContext.person.name}>
    <TextContainer>
      <PageTitle>{pageContext.person.name}</PageTitle>
      {pageContext.person.email && (
        <LeadParagraph>
          <a href={`mailto:${pageContext.person.email}`}>
            {pageContext.person.email}
          </a>
        </LeadParagraph>
      )}
      {pageContext.person.position && (
        <>
          <SectionTitle>Positions</SectionTitle>
          {pageContext.person.position.map(position => (
            <InfoPane title={position.name}>
              {position.agency.map(agency => (
                <Link to={`/agency/${agency.slug}`}>{agency.name}</Link>
              ))}
            </InfoPane>
          ))}
        </>
      )}
    </TextContainer>
  </Layout>
)

export default PersonTemplate
