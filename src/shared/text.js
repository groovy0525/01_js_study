import styled from 'styled-components'

const Text = styled.div`
  ${({ display }) => display && `display:${display};`}
  ${({ margin }) => margin && `margin:${margin};`}
  ${({ padding }) => padding && `padding:${padding};`}
  ${({ color }) => color && `color:${color};`}
  ${({ size }) => size && `font-size: ${size}px;`}
  ${({ bold }) => bold && `font-weight:${bold};`}
`

export default Text
