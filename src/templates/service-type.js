import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import { Container } from '../components/common/container'
import { Link } from 'gatsby'
import { BlockList, BlockListItem } from '../components/common/block-list'
import { LeadParagraph } from '../components/common/type'
import styled from '@emotion/styled'

const ServiceTitle = styled.h4`
  margin: 0;
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
        {pageContext.services.service.map(service => (
          <li>
            <BlockListItem>
              <ServiceTitle>
                <Link
                  to={`/agency/${service.agency[0].slug}/service/${service.slug}`}
                >
                  {service.agency[0].name}
                </Link>
              </ServiceTitle>
            </BlockListItem>
          </li>
        ))}
      </BlockList>
    </Container>
  </Layout>
)

export default ServiceTemplate
