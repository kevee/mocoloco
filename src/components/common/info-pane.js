import React from 'react'
import styled from '@emotion/styled'
import { ButtonAnchor } from './button'
import { Flex, Box } from './grid'
import { PropTypes } from 'prop-types'
import ExternalLink from './external-link'

const InfoTitle = styled.h3`
  font-size: 1.1rem;
`

const InfoFlex = styled(Flex)`
  margin-bottom: 1rem;
`

const InfoLinkPane = ({ link, title, linkTitle }) => (
  <InfoPane title={title}>
    <ButtonAnchor target="_blank" rel="noopener noreferrer" href={link}>
      {linkTitle}
      <ExternalLink />
    </ButtonAnchor>
  </InfoPane>
)

InfoLinkPane.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
}

const InfoPane = ({ title, children }) => (
  <InfoFlex>
    <Box width={[1 / 3]} pr={3}>
      <InfoTitle>{title}</InfoTitle>
    </Box>
    <Box width={[2 / 3]}>{children}</Box>
  </InfoFlex>
)

InfoPane.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export { InfoPane, InfoLinkPane }
