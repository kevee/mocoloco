import styled from '@emotion/styled'
import colors from '../../style/colors'
import Link from 'gatsby-link'

const buttonStyle = `
  border: 0;
  background: ${colors.primary.dark};
  color: ${colors.primary.light} !important;
  padding: 0.5rem;
  cursor: pointer;
  text-align: left;
`

const Button = styled.button`
  ${buttonStyle};
`

const ButtonAnchor = styled.a`
  ${buttonStyle};
  text-decoration: none;
`

const ButtonLink = styled(Link)`
  ${buttonStyle};
`

const ButtonLooksLikeLink = styled.button`
  border: 0;
  padding: 0;
  text-align: left;
  background: transparent;
  color: ${colors.link};
  text-decoration: underline;
  cursor: pointer;
`

export { Button, ButtonLink, ButtonAnchor, ButtonLooksLikeLink }
