import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Button,
  ButtonLink,
  ButtonAnchor,
  ButtonLooksLikeLink,
} from '../button'

storiesOf('Components/Button', module)
  .add('Button', () => <Button>This is a button</Button>, {
    info: 'A regular HTML `button`>` element, use for in-page dynamic changes.',
  })
  .add(
    'ButtonLink',
    () => <ButtonLink to="/page">This is a button</ButtonLink>,
    {
      info: 'A gatsby `Link` component styled like a button.',
    }
  )
  .add(
    'ButtonAnchor',
    () => (
      <ButtonAnchor href="https://google.com">This is a button</ButtonAnchor>
    ),
    {
      info: 'A regular HTML `a` element, styled like a button.',
    }
  )
  .add(
    'ButtonLooksLikeLink',
    () => <ButtonLooksLikeLink>This is a button</ButtonLooksLikeLink>,
    {
      info: 'A regular `button` element, styled to look like a link.',
    }
  )
