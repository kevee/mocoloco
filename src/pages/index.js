import React, { useState } from 'react'
import Layout from '../components/layouts/default'
import { Container } from '../components/common/container'
import { LeadParagraph } from '../components/common/type'
import styled from '@emotion/styled'
import { Flex, Box } from '../components/common/grid'
import { TextInput } from '../components/common/forms'
import { Link, graphql } from 'gatsby'
import ListUnstyled from '../components/common/list-unstyled'
import bp from '../style/breakpoints'

const HomeContainer = styled.div`
  ${bp({
    marginTop: ['1rem', '5rem'],
  })}
`

const Index = ({ data }) => {
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Layout noHeadingMargin={true}>
      <Container>
        <HomeContainer>
          <Flex flexWrap="wrap">
            <Box width={[1, 2 / 3]} px={[0, 20]}>
              <LeadParagraph>
                Every government agency and service in Monterey County, right
                here.
              </LeadParagraph>
              <form>
                <TextInput
                  type="text"
                  aria-label="Search"
                  placeholder="Monterey County"
                  onChange={event => {
                    const searchQuery = event.target.value.trim().toLowerCase()
                    setSearchQuery(searchQuery)
                    if (!searchQuery.length) {
                      setSearchResults([])
                      return
                    }
                    const results = []
                    data.allContentfulAgency.nodes.forEach(agency => {
                      if (agency.name.toLowerCase().search(searchQuery) > -1) {
                        results.push(agency)
                      }
                    })
                    results.sort((a, b) => {
                      return a.sortName.toLowerCase().trim() <
                        b.sortName.toLowerCase().trim()
                        ? -1
                        : 1
                    })
                    setSearchResults(results)
                  }}
                ></TextInput>
              </form>
              {searchResults && searchResults.length > 0 && (
                <ListUnstyled>
                  {searchResults.map((result, index) => (
                    <React.Fragment key={result.slug}>
                      {index < 5 && (
                        <li>
                          <Link to={`/agency/${result.slug}`}>
                            {result.name}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                  {searchResults.length > 5 && (
                    <li>
                      <>...and </>
                      <Link to={`/search/?q=${searchQuery}`}>
                        {searchResults.length - 5} more
                      </Link>
                    </li>
                  )}
                </ListUnstyled>
              )}
            </Box>
            <Box width={[1, 1 / 3]} pl={[0, 3]}>
              <h2>Popular services</h2>
              <ListUnstyled>
                {data.allContentfulServiceType.nodes.map(serviceType => (
                  <li key={serviceType.slug}>
                    <Link to={`/service-type/${serviceType.slug}`}>
                      {serviceType.name}
                    </Link>
                  </li>
                ))}
              </ListUnstyled>
            </Box>
          </Flex>
          <LeadParagraph></LeadParagraph>
        </HomeContainer>
      </Container>
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    allContentfulAgency(sort: { fields: [sortName] }) {
      nodes {
        name
        sortName
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
    allContentfulServiceType(sort: { fields: [name] }) {
      nodes {
        name
        slug
      }
    }
  }
`
