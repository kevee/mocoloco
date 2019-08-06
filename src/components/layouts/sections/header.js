import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import colors from '../../../style/colors'
import { Container } from '../../common/container'
import { Flex, Box } from '@rebass/grid/emotion'

const Brand = styled(Link)`
  font-size: 1.3rem;
  color: ${colors.primary.dark} !important;
  text-decoration: none;
  font-family: 'Public Sans black';
  &:hover {
    text-decoration: underline;
  }
`

const HeaderWrapper = styled.header`
  padding: 0.75rem 0;
  border-bottom: 2.5px ${colors.primary.dark} solid;
  ${props =>
    !props.noHeadingMargin &&
    `
  margin-bottom: 1rem;
  `}
`

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: right;
  li {
    display: inline-block;
    margin-left: 1.5rem;
  }
`

const Header = ({ noHeadingMargin }) => (
  <HeaderWrapper noHeadingMargin={noHeadingMargin}>
    <Container>
      <Flex>
        <Box width={[1, 3 / 12]} mr={[0, 3]}>
          <Brand to="/">mocoloco</Brand>
        </Box>
        <Box width={[1, 9 / 12]}>
          <nav>
            <NavigationList>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </NavigationList>
          </nav>
        </Box>
      </Flex>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  noHeadingMargin: PropTypes.bool,
}

export default Header
