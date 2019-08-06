import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import colors from '../../style/colors'
import Link from 'gatsby-link'

const buttonStyle = `
  border: 0;
  background: ${colors.primary.dark};
  color: ${colors.primary.light} !important;
  padding: 0.5rem;
  display: inline-block;
  cursor: pointer;
  text-align: left;
`

const Button = styled.button`
  ${buttonStyle};
`

Button.propTypes = {
  children: PropTypes.element,
}

const ButtonAnchor = styled.a`
  ${buttonStyle};
  text-decoration: none;
`

ButtonAnchor.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
}

const ButtonLink = styled(Link)`
  ${buttonStyle};
  text-decoration: none;
`

ButtonLink.propTypes = {
  children: PropTypes.element,
  to: PropTypes.string,
}

const ButtonLooksLikeLink = styled.button`
  border: 0;
  padding: 0;
  text-align: left;
  background: transparent;
  color: ${colors.link};
  text-decoration: underline;
  cursor: pointer;
`
ButtonLooksLikeLink.propTypes = {
  children: PropTypes.element,
}

export { Button, ButtonLink, ButtonAnchor, ButtonLooksLikeLink }
