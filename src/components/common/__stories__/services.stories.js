import React from 'react'
import { storiesOf } from '@storybook/react'
import { ServiceList, Service } from '../services'

const sampleAgency = {
  slug: 'agency',
}

const sampleService = {
  name: 'Pay parking ticket',
  slug: 'pay-parkint-ticket',
  type: [
    {
      name: 'Parking ticket',
    },
  ],
  description: {
    childMarkdownRemark: {
      html: 'It is time to <strong>pay that parking ticket</strong>, buddy!',
    },
  },
}

storiesOf('Components/Service blocks', module)
  .add(
    'Service',
    () => <Service service={sampleService} agency={sampleAgency} />,
    {
      info: 'A single service listing.',
    }
  )
  .add(
    'ServiceList',
    () => (
      <ServiceList
        services={[sampleService, sampleService, sampleService]}
        agency={sampleAgency}
      />
    ),
    {
      info: 'A single service listing.',
    }
  )
