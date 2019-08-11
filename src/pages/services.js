import React from 'react'
import Layout from '../components/layouts/default'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import { Container } from '../components/common/container'
import PageTitle from '../components/common/page-title'
import { BlockList, BlockListItem } from '../components/common/block-list'

const ServicesPage = ({ data }) => {
  return (
    <Layout title="Services">
      <Container>
        <PageTitle>Services</PageTitle>
        <BlockList>
          {data.allContentfulServiceType.nodes.map(serviceType => (
            <BlockListItem key={serviceType.slug}>
              <Link to={`/service-type/${serviceType.slug}`}>
                {serviceType.name}
              </Link>
            </BlockListItem>
          ))}
        </BlockList>
      </Container>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  {
    allContentfulServiceType(sort: { fields: [name] }) {
      nodes {
        name
        slug
      }
    }
  }
`
