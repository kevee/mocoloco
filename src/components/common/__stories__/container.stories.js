import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, TextContainer } from '../container'
import styled from '@emotion/styled'

const SampleElement = styled.div`
  background: #aaa;
`

storiesOf('Components/Containers', module)
  .add(
    'Container',
    () => (
      <Container>
        <SampleElement />
      </Container>
    ),
    {
      info: 'A container for use by regular content.',
    }
  )
  .add(
    'TextContainer',
    () => (
      <TextContainer>
        <SampleElement />
      </TextContainer>
    ),
    {
      info: 'A container for text-heavy pages, 66ch wide.',
    }
  )
