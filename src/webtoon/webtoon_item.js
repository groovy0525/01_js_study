import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'

const Base = styled(Container)`
  align-items: center;
  & + & {
    border-top: 1px solid #eee;
  }
`

const Author = styled(Text)`
  align-items: center;
  justify-content: space-between;
  &:after {
    content: '';
    width: 1px;
    height: 60%;
    margin: 0 10px;
    background-color: #ddd;
  }
`

const Img = styled.img``

const Button = styled.button`
  outline: none;
  border: none;

  width: 100px;
  padding: 10px;
  margin-left: auto;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`

function WebtoonItem({ webtoon, onDelete }) {
  const { id, title, author, src, day } = webtoon
  return (
    <Base display="flex" padding="10px 0">
      <Img src={src} alt={title} />
      <Text margin="0 0 0 10px">
        <Text bold>{title}</Text>
        <Text display="flex" color="#bbb" size={14}>
          <Author display="flex">{author}</Author>
          <Text size={13}>{day}</Text>
        </Text>
      </Text>
      <Button onClick={() => onDelete(id)}>삭제</Button>
    </Base>
  )
}

export default WebtoonItem
