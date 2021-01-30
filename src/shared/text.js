import styled from 'styled-components'

const Text = styled.div`
  ${({ size }) => size && `font-size: ${size}px;`}
`

export default Text
