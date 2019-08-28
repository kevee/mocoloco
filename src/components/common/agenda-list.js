import React from 'react'
import ListUnstyled from './list-unstyled'
import { Flex, Box } from './grid'
import styled from '@emotion/styled'
import bp from '../../style/breakpoints'
import { fontsBody } from '../../style/font-families'
import { Link } from 'gatsby'

const AgendaDateBox = styled(Box)``

const AgendaTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-family: ${fontsBody.join(',')};
`

const AgendaListElement = styled(ListUnstyled)`
  ${bp({
    marginBottom: [0, '2rem'],
  })}
`

const AgendaList = ({ agency, agendas }) => (
  <AgendaListElement>
    {agendas.map(agenda => (
      <li>
        <Flex>
          <Box width={[1, 2 / 3]} pr={[0, 3]}>
            <AgendaTitle>
              <Link to={`/agency/${agency.slug}/meeting/${agenda.id}`}>
                {agenda.name}
              </Link>
            </AgendaTitle>
          </Box>
          <AgendaDateBox width={[1, 1 / 3]}>{agenda.dateTime}</AgendaDateBox>
        </Flex>
      </li>
    ))}
  </AgendaListElement>
)

export { AgendaList }
