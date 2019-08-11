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

const BlockListItem = styled.li`
  border: ${colors.primary.muted} 1px solid;
  padding: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
`

export { BlockList, BlockListItem }
