import styled from 'styled-components'

/**
 * styled.<tagname> = `styles ...`
 */

const Container = styled.div`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ centerd }) => centerd && `margin: 0 auto;`}
`

export default Container
