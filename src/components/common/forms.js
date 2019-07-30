import React from 'react'
import styled from '@emotion/styled'
import colors from '../../style/colors'

const textStyle = `
  padding: 0.5rem;
  border: ${colors.primary.dark} 2px solid;
`

const TextInput = styled.input`
  ${textStyle}
`

const FormSubmitElement = styled.input`
  border: 0;
  background: ${colors.primary.dark};
  color: #fff;
  padding: 0.5rem;
`

const FormSubmit = ({ value }) => (
  <FormSubmitElement type="submit" value={value} />
)

export { TextInput, FormSubmit }
