import React from 'react'
import { storiesOf } from '@storybook/react'
import PageTitle from '../page-title'

storiesOf('Components/Page title', module)
  .add(
    'PageTitle - default',
    () => <PageTitle>This is a page title</PageTitle>,
    {
      info: 'A title element for the page.',
    }
  )
  .add(
    'PageTitle - centered',
    () => <PageTitle center={true}>This is a page title</PageTitle>,
    {
      info: 'A title element for the page - centered.',
    }
  )
  .add(
    'PageTitle - without border',
    () => <PageTitle noBorder={true}>This is a page title</PageTitle>,
    {
      info: 'A title element for the page - but without a bottom border.',
    }
  )
