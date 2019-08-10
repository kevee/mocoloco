import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PropTypes } from 'prop-types'
import { BlockList, BlockListItem } from '../common/block-list'

const ServiceTypeList = styled.ul`
  list-style-type: none;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  font-weight: 700;
  li {
    display: inline-block;
  }
`

const ServiceTitle = styled.h4`
  margin: 0;
`

const Service = ({ service, agency }) => (
  <BlockListItem>
    <ServiceTitle>
      <Link to={`/agency/${agency.slug}/service/${service.slug}`}>
        {service.name}
      </Link>
    </ServiceTitle>
    <ServiceTypeList>
      {service.type.map(type => (
        <li>{type.name}</li>
      ))}
    </ServiceTypeList>
    <div
      dangerouslySetInnerHTML={{
        __html: service.description.childMarkdownRemark.html,
      }}
    />
  </BlockListItem>
)

Service.propTypes = {
  agency: PropTypes.object,
  service: PropTypes.object,
}

const ServiceList = ({ services, agency }) => (
  <BlockList>
    {services.map(service => (
      <li>
        <Service service={service} agency={agency} />
      </li>
    ))}
  </BlockList>
)

ServiceList.propTypes = {
  agency: PropTypes.object,
  services: PropTypes.array,
}

export { ServiceList, Service }
