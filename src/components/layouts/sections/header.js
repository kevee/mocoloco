import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import colors from '../../../style/colors'

const Brand = styled(Link)`
  font-weight: bold;
  color: ${colors.primary.dark};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Header = () => (
  <header>
    <Brand to="/">mocoloco</Brand>
  </header>
)

export default Header
