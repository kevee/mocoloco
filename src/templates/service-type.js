import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import { Container } from '../components/common/container'
import { Link } from 'gatsby'
import { BlockList, BlockListItem } from '../components/common/block-list'
import { LeadParagraph } from '../components/common/type'
import styled from '@emotion/styled'
import colors from '../style/colors'

const ServiceTitle = styled.h4`
  margin: 0;
`

const ServiceAgencyTitle = styled.p`
  margin-bottom: 0.5rem;
`

const ServiceLink = styled(Link)`
  color: ${colors.primary.dark};
  text-decoration: none;
  &:visited {
    color: ${colors.primary.dark};
  }
`

const ServiceTemplate = ({ pageContext }) => (
  <Layout title={pageContext.services.name}>
    <Container>
      <PageTitle>{pageContext.services.name}</PageTitle>
      <LeadParagraph>
        There are {pageContext.services.service.length} agencies that offer this
        service.
      </LeadParagraph>
      <BlockList>
        {pageContext.services.service.map((service, index) => (
          <BlockListItem key={`service-${index}`}>
            <ServiceLink
              to={`/agency/${service.agency[0].slug}/service/${service.slug}`}
            >
              <ServiceAgencyTitle>{service.agency[0].name}</ServiceAgencyTitle>
              <ServiceTitle>{service.name}</ServiceTitle>
            </ServiceLink>
          </BlockListItem>
        ))}
      </BlockList>
    </Container>
  </Layout>
)

export default ServiceTemplate
