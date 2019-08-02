import React from 'react'
import styled from '@emotion/styled'
import colors from '../../../style/colors'
import { Container } from '../../common/container'
import { Link } from 'gatsby'

const FooterElement = styled.footer`
  margin-top: 1.5rem;
  border-top: ${colors.primary.muted} 2px solid;
  padding: 0.5rem 0;
`

const FooterText = styled.p`
  color: ${colors.primary.muted};
  font-size: 0.9rem;
  margin-bottom: 0;
`

const LegalLink = styled(Link)`
  display: block;
  float: right;
`

const Footer = () => (
  <FooterElement>
    <Container>
      <FooterText>
        <LegalLink to="/legal">Legal information</LegalLink>
        <strong>mocoloco</strong> is by{' '}
        <a href="https://kevee.net">Kevin Miller</a>
      </FooterText>
    </Container>
  </FooterElement>
)

export default Footer
