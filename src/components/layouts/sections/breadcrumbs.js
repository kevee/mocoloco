import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Container } from '../../common/container'

const BreadcrumbList = styled.ul`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  list-style-type: none;
  li {
    display: inline-block;
    margin-right: 1rem;
  }
`

const Breadcrumbs = ({ crumbs }) => (
  <Container>
    <BreadcrumbList>
      {crumbs.map(({ link, name }) => (
        <li>{link ? <Link to={link}>{name}</Link> : <>{name}</>}</li>
      ))}
    </BreadcrumbList>
  </Container>
)

Breadcrumbs.propTypes = {
  name: PropTypes.array,
}

export default Breadcrumbs
