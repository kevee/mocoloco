import React from 'react'
import styled from '@emotion/styled'
import { ButtonAnchor } from './button'
import { Flex, Box } from '@rebass/grid/emotion'

const InfoTitle = styled.h3`
  font-size: 1.1rem;
`

const InfoFlex = styled(Flex)`
  margin-bottom: 1rem;
`

const InfoLinkPane = ({ link, title, linkTitle }) => (
  <InfoPane title={title}>
    <ButtonAnchor target="_blank" href={link}>
      {linkTitle}
    </ButtonAnchor>
  </InfoPane>
)

const InfoPane = ({ title, children }) => (
  <InfoFlex>
    <Box width={[1 / 3]} mr={3}>
      <InfoTitle>{title}</InfoTitle>
    </Box>
    <Box width={[2 / 3]}>{children}</Box>
  </InfoFlex>
)

export { InfoPane, InfoLinkPane }
