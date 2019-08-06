import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../footer'
import PlaceholderContent from './placeholder-content'

storiesOf('Layout/Footer', module).add('default', () => (
  <>
    <PlaceholderContent />
    <Footer />
  </>
))
