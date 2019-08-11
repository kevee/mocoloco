import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import VisuallyHidden from './visually-hidden'

const ExternalLinkIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  font-size: 0.7rem;
`

const ExternalLink = () => (
  <>
    <ExternalLinkIcon icon={faExternalLinkAlt} />
    <VisuallyHidden>External link</VisuallyHidden>
  </>
)

export default ExternalLink
