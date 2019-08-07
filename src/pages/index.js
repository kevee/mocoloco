import React, { useState } from 'react'
import Layout from '../components/layouts/default'
import { TextContainer } from '../components/common/container'
import { LeadParagraph } from '../components/common/type'
import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/grid/dist/emotion'
import { TextInput } from '../components/common/forms'
import { Link, graphql } from 'gatsby'
import ListUnstyled from '../components/common/list-unstyled'
import condor from '../assets/images/animation/condor.png'

const HomeContainer = styled.div`
  margin-top: 3rem;
`

const Condor = styled.div`
  text-align: center;
  margin-top: -50px;
  img {
    width: 200px;
  }
`

const Index = ({ data }) => {
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Layout title="mocoloco" noHeadingMargin={true}>
      <TextContainer>
        <HomeContainer>
          <Flex>
            <Box width={[2 / 3]}>
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
                      return a.name.toLowerCase().trim() <
                        b.name.toLowerCase().trim()
                        ? -1
                        : 1
                    })
                    setSearchResults(results)
                  }}
                ></TextInput>
              </form>
            </Box>
            <Box width={[1 / 3]} ml={[3]}>
              <Condor>
                <img src={condor} alt="" />
              </Condor>
              {searchResults && searchResults.length > 0 && (
                <ListUnstyled>
                  {searchResults.map((result, index) => (
                    <>
                      {index < 5 && (
                        <li>
                          <Link to={`/agency/${result.slug}`}>
                            {result.name}
                          </Link>
                        </li>
                      )}
                    </>
                  ))}
                  {searchResults.length > 5 && (
                    <li>
                      ...and{' '}
                      <Link to={`/search/?q=${searchQuery}`}>
                        {searchResults.length - 5} more
                      </Link>
                    </li>
                  )}
                </ListUnstyled>
              )}
            </Box>
          </Flex>
          <LeadParagraph></LeadParagraph>
        </HomeContainer>
      </TextContainer>
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    allContentfulAgency(sort: { fields: [name] }) {
      nodes {
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
