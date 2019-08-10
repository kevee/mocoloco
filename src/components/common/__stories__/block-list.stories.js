import React from 'react'
import { storiesOf } from '@storybook/react'
import { BlockList, BlockListItem } from '../block-list'

storiesOf('Components/Block list', module).add(
  'BlockList',
  () => (
    <BlockList>
      <li>
        <BlockListItem>
          <h3>Title</h3>
          <p>This is a block!</p>
        </BlockListItem>
        <BlockListItem>
          <h3>Title</h3>
          <p>This is a block!</p>
        </BlockListItem>
        <BlockListItem>
          <h3>Title</h3>
          <p>This is a block!</p>
        </BlockListItem>
        <BlockListItem>
          <h3>Title</h3>
          <p>This is a block!</p>
        </BlockListItem>
      </li>
    </BlockList>
  ),
  {
    info: 'A two-column unordered list.',
  }
)
