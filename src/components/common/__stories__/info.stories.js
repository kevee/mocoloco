import React from 'react'
import { storiesOf } from '@storybook/react'
import { InfoPane, InfoLinkPane } from '../info-pane'

storiesOf('Components/Info panes', module)
  .add(
    'InfoPane',
    () => <InfoPane title="City population">Over 10,000 happy people</InfoPane>,
    {
      info: 'A info pane quickly highlights short information.',
    }
  )
  .add(
    'InfoLinkPane',
    () => (
      <InfoLinkPane
        title="City council meeting"
        link="http://google.com"
        linkTitle="View video"
      />
    ),
    {
      info: 'A info pane that displays a button link to an external resource.',
    }
  )
