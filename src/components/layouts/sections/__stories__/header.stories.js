import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../header'
import PlaceholderContent from './placeholder-content'

storiesOf('Layout/Header', module)
  .add('default', () => (
    <>
      <Header />
      <PlaceholderContent />
    </>
  ))
  .add('without margin', () => (
    <>
      <Header noHeadingMargin={true} />
      <PlaceholderContent />
    </>
  ))
