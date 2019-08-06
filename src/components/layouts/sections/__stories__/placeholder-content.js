import React from 'react'
import styled from '@emotion/styled'

const PlaceholderBody = styled.div`
  height: 150px;
  background: #aaa;
  color: #000;
  padding: 2rem;
  text-align: center;
  font-size: 3rem;
`

const PlaceholderContent = () => (
  <PlaceholderBody>This is the content</PlaceholderBody>
)

export default PlaceholderContent
