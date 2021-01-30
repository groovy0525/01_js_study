import styled from 'styled-components'

/**
 * styled.<tagname> = `styles ...`
 */

const Container = styled.div`
  ${({ display }) => display && `display: ${display};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ height }) => height && `height: ${height}px;`}
  ${({ centered }) => centered && `margin: 0 auto;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ background }) => background && `background:${background};`}
`

export default Container
