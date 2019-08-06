import React from 'react'
import { storiesOf } from '@storybook/react'
import Breadcrumbs from '../breadcrumbs'

storiesOf('Layout/Breadcrumbs', module).add('default', () => (
  <Breadcrumbs
    crumbs={[
      { link: '/', name: 'Home' },
      { link: '/a', name: 'Page A' },
      { link: false, name: 'Page B' },
    ]}
  />
))
