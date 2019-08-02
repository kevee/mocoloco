import React from 'react'
import colors from '../../style/colors'
import { Container } from './container'
import styled from '@emotion/styled'

const PulloutElement = styled.div`
  background: ${colors.secondary.light};
  margin: 1rem 0;
  padding: 1.5rem 0;
`

const Pullout = ({ children }) => (
  <PulloutElement>
    <Container>{children}</Container>
  </PulloutElement>
)

export default Pullout
