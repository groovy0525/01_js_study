import styled from 'styled-components'
import { bold, marginPadding } from './mixins'

const Text = styled.div`
  ${({ display }) => display && `display:${display};`}
  ${({ color }) => color && `color:${color};`}
  ${({ size }) => size && `font-size: ${size}px;`}
  

  ${marginPadding}
  ${bold}
`

export default Text
