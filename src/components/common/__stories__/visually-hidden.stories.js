import React from 'react'
import { storiesOf } from '@storybook/react'
import VisuallyHidden from '../visually-hidden'
import { Button } from '@storybook/react/demo'

storiesOf('Components/Visually hidden', module).add(
  'VisuallyHidden',
  () => (
    <Button>
      👍<VisuallyHidden>thumbs up</VisuallyHidden>
    </Button>
  ),
  {
    info:
      'An element styled to be not visually percievable, but still readable by screen-readers.',
  }
)
