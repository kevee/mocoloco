import React, { useState, useEffect } from 'react'
import Layout from '../components/layouts/default'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { TextContainer } from '../components/common/container'
import PageTitle from '../components/common/page-title'
import { TextInput, FormSubmit } from '../components/common/forms'
import { Flex, Box } from '@rebass/grid/emotion'
import colors from '../style/colors'
import url from 'url'

const SearchInput = styled(TextInput)`
  font-size: 1.3rem;
  width: 100%;
`

const SearchFormSubmit = styled.div`
  input {
    font-size: 1.3rem;
    padding: 0.4rem;
    border: 3px solid ${colors.primary.dark};
  }
`

const SearchResult = ({ agency }) => (
  <div>
    <h3>
      <Link to={`/agency/${agency.slug}`}>{agency.name}</Link>
    </h3>
  </div>
)

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const findAgencies = () => {
    const results = []
    data.allContentfulAgency.nodes.forEach(agency => {
      if (agency.name.toLowerCase().search(searchQuery) > -1) {
        results.push(agency)
      }
    })
    results.sort((a, b) => {
      return a.name.toLowerCase().trim() < b.name.toLowerCase().trim() ? -1 : 1
    })
    setSearchResults(results)
  }
  useEffect(() => {
    if (searchQuery) {
      return
    }
    if (typeof window === 'undefined') {
      return
    }
    const address = url.parse(window.location.href, true)
    if (address.query && address.query.q) {
      setSearchQuery(address.query.q)
      findAgencies()
    }
  })

  return (
    <Layout title="mocoloco">
      <TextContainer>
        <PageTitle>Search</PageTitle>
        <form
          onSubmit={event => {
            event.preventDefault()
            findAgencies()
          }}
        >
          <Flex>
            <Box width={[1, 3 / 4]} mr={[0, 3]}>
              <SearchInput
                name="search"
                id="search-form"
                aria-label="Search"
                placeholder="Search"
                onChange={event => {
                  setSearchQuery(event.target.value.toLowerCase().trim())
                }}
              />
            </Box>
            <Box width={[1, 1 / 4]}>
              <SearchFormSubmit>
                <FormSubmit value="Search" />
              </SearchFormSubmit>
            </Box>
          </Flex>
        </form>
        {searchResults && (
          <div>
            <h3>Results</h3>
            {searchResults.map(agency => (
              <SearchResult key={agency.slug} agency={agency} />
            ))}
          </div>
        )}
      </TextContainer>
    </Layout>
  )
}

export default Search

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
