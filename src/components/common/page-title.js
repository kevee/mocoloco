import styled from '@emotion/styled'

const PageHeader = styled.h1`
  ${props =>
    props.center &&
    `
    text-align: center;
  `}
`

export default PageHeader
