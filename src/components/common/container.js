import bp from '../../style/breakpoints'
import styled from '@emotion/styled'
import { PropTypes } from 'prop-types'

const Container = styled.div`
  ${bp({
    maxWidth: ['100%', '100%', '1100px'],
    margin: ['0 1rem', '0 1rem', '0 auto'],
  })}
`

Container.propTypes = {
  children: PropTypes.element,
}

const TextContainer = styled.div`
  ${bp({
    maxWidth: ['100%', '100%', '60ch'],
    margin: ['0 1rem', '0 1rem', '0 auto'],
  })}
`

TextContainer.propTypes = {
  children: PropTypes.element,
}

export { Container, TextContainer }
