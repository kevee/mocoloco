import React from 'react'
import { storiesOf } from '@storybook/react'
import ListUnstyled from '../list-unstyled'

storiesOf('Components/Unstyled list', module).add(
  'ListUnstyled',
  () => (
    <ListUnstyled>
      <li>This is item A</li>
      <li>This is item B</li>
      <li>This is item C</li>
    </ListUnstyled>
  ),
  {
    info: 'A useful `ul` element without any list style.',
  }
)
