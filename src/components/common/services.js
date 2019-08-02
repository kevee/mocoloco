import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import colors from '../../style/colors'

const ServiceListElement = styled.ul`
  list-style-type: none;
  margin: 0;
  h4 {
    margin-bottom: 0.5rem;
  }
  > li {
    border: ${colors.primary.muted} 1px solid;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`

const ServiceTypeList = styled.ul`
  list-style-type: none;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  font-weight: 700;
  li {
    display: inline-block;
  }
`

const Service = ({ service, agency }) => (
  <li>
    <h4>
      <Link to={`/agency/${agency.slug}/service/${service.slug}`}>
        {service.name}
      </Link>
    </h4>
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
  </li>
)

const ServiceList = ({ services, agency }) => (
  <ServiceListElement>
    {services.map(service => (
      <Service service={service} agency={agency} />
    ))}
  </ServiceListElement>
)

export { ServiceList, Service }
