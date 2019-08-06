import styled from '@emotion/styled'
import colors from '../../style/colors'
import { PropTypes } from 'prop-types'

const PageHeader = styled.h1`
  ${props =>
    props.noBorder
      ? ``
      : `
      border-bottom: 5px solid ${colors.primary.dark};
      padding-bottom: 0.4rem;`}

  ${props =>
    props.center &&
    `
    text-align: center;
  `};
`

PageHeader.propTypes = {
  noBorder: PropTypes.bool,
  center: PropTypes.bool,
}

export default PageHeader
