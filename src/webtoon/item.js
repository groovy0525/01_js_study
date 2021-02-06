import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

const ItemContainer = styled(Container)`
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

// 공통 컴포넌트 정의 필요
const Img = styled.img``

// 공통 컴포넌트 정의 필요
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

function Item({ webtoon, onDelete }) {
  const { id, title, author, src, day } = webtoon
  return (
    <ItemContainer display="flex" padding="10px 0">
      <Img src={src} alt={title} />
      <Container margin="0 0 0 10px">
        <Text bold>{title}</Text>
        <Text display="flex" color="#bbb" size={14}>
          <Author display="flex">{author}</Author>
          <Text size={13}>{day}</Text>
        </Text>
      </Container>
      <Button onClick={() => onDelete(id)}>삭제</Button>
    </ItemContainer>
  )
}

Item.propTypes = {
  webtoon: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    src: PropTypes.string,
    day: PropTypes.string,
  }),
  onDelete: PropTypes.func,
}

export default Item
