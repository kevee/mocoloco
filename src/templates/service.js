import React from 'react'
import Layout from '../components/layouts/default'
import PageTitle from '../components/common/page-title'
import { Container } from '../components/common/container'
import { Link } from 'gatsby'
import { Flex, Box } from '../components/common/grid'
import { ButtonAnchor } from '../components/common/button'
import ExternalLink from '../components/common/external-link'

const ServiceTemplate = ({ pageContext }) => (
  <Layout title={pageContext.service.name}>
    <Container>
      <PageTitle>{pageContext.service.name}</PageTitle>
      <p>
        A service of{' '}
        <Link to={`/agency/${pageContext.service.agency[0].slug}`}>
          {pageContext.service.agency[0].name}
        </Link>
        .
      </p>
      <Flex>
        <Box width={[2 / 3]} mr={3}>
          <div
            dangerouslySetInnerHTML={{
              __html: pageContext.service.description.childMarkdownRemark.html,
            }}
          />
        </Box>
        <Box width={[1 / 3]}>
          <ButtonAnchor
            rel="noopener noreferrer"
            href={pageContext.service.link}
            target="_blank"
          >
            View service
            <ExternalLink />
          </ButtonAnchor>
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default ServiceTemplate
