import React from 'react'
import { storiesOf } from '@storybook/react'
import Address from '../address'

storiesOf('Components/Address block', module).add(
  'ListUnstyled',
  () => (
    <Address>
      Marina City Hall
      <br />
      100 Marina Way
      <br />
      Marina, CA &nbsp;93944
    </Address>
  ),
  {
    info: 'A styled `address` element.',
  }
)
