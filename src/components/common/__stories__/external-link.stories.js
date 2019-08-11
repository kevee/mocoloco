import React from 'react'
import { storiesOf } from '@storybook/react'
import ExternalLink from '../external-link'

storiesOf('Components/External link', module).add(
  'ExternalLink - anchor',
  () => (
    <a href="/">
      Visit this external site
      <ExternalLink />
    </a>
  ),
  {
    info:
      'An icon to indicate that a link goes to an external site. Contains a visually hidden text for screen reader users.',
  }
)
