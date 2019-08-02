import React, { useState } from 'react'
import Layout from '../components/layouts/default'
import { TextContainer } from '../components/common/container'
import { LeadParagraph } from '../components/common/type'
import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/grid/dist/emotion'
import { FormSubmit, TextInput } from '../components/common/forms'
import { navigate } from 'gatsby'

const HomeContainer = styled.div`
  margin-top: 5rem;
`

const Index = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Layout title="mocoloco">
      <TextContainer>
        <HomeContainer>
          <Flex>
            <Box width={[2 / 3]}>
              <LeadParagraph>
                Every government agency and service in Monterey County, right
                here.
              </LeadParagraph>
              <form
                onSubmit={event => {
                  event.preventDefault()
                  navigate(`/search/?q=${searchQuery}`)
                }}
              >
                <TextInput
                  type="text"
                  aria-label="Search"
                  placeholder="Monterey County"
                  onChange={event => {
                    setSearchQuery(event.target.value)
                  }}
                ></TextInput>
                <FormSubmit value="Search" />
              </form>
            </Box>
            <Box width={[1 / 3]} ml={[3]}></Box>
          </Flex>
          <LeadParagraph></LeadParagraph>
        </HomeContainer>
      </TextContainer>
    </Layout>
  )
}

export default Index
