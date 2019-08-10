import styled from '@emotion/styled'
import bp from '../../style/breakpoints'
import colors from '../../style/colors'

const BlockList = styled.ul`
  list-style-type: none;
  margin: 0;
  ${bp({
    columnCount: [1, 2],
  })}
`

const BlockListItem = styled.div`
  border: ${colors.primary.muted} 1px solid;
  padding: 1rem;
  margin-bottom: 1.5rem;
`

export { BlockList, BlockListItem }
