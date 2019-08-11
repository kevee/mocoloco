import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
import bp from '../../../style/breakpoints'
import colors from '../../../style/colors'
import { Container } from '../../common/container'
import { Flex, Box } from '../../common/grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

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
  ${bp({
    textAlign: ['left', 'right'],
  })}
  margin: 0;
  padding: 0;
  li {
    ${bp({
      display: ['block', 'inline-block'],
      marginLeft: ['0', '1.5rem'],
    })}
  }
`

const DesktopNavigation = styled.nav`
  ${bp({
    display: ['none', 'block'],
  })}
`

const HeaderMobileButton = styled.button`
  ${bp({
    display: ['inline-block', 'none'],
  })}
  border: 0;
  background: translate;
  font-size: 1.5rem;
  cursor: pointer;
`

const HeaderNavigation = () => (
  <NavigationList>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/map">Map</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
  </NavigationList>
)

const Header = ({ noHeadingMargin }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <HeaderWrapper noHeadingMargin={noHeadingMargin}>
      <Container>
        <Flex>
          <Box width={[10 / 12, 4 / 12]} pr={[0, 3]}>
            <Brand to="/">mocoloco</Brand>
          </Box>
          <Box width={[2 / 12, 8 / 12]}>
            <DesktopNavigation>
              <HeaderNavigation />
            </DesktopNavigation>
            <HeaderMobileButton
              onClick={event => {
                event.preventDefault()
                setIsExpanded(!isExpanded)
              }}
            >
              <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} />
            </HeaderMobileButton>
          </Box>
        </Flex>
        {isExpanded && <HeaderNavigation />}
      </Container>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  noHeadingMargin: PropTypes.bool,
}

export default Header
