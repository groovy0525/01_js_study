import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  outline: none;
  border: none;

  margin-bottom: 10px;
  padding: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-size: 16px;
`

const Button = styled.button`
  border: none;
  outline: none;

  padding: 10px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
`

function WebtoonAddForm({ onCreate }) {
  const DEFAULT_WEBTOON_VALUE = {
    title: '',
    author: '',
    src:
      'https://shared-comic.pstatic.net/thumb/webtoon/703852/thumbnail/thumbnail_IMAG10_7a7e52e5-f211-485d-a5ba-4f6f3f8acdc6.jpg',
    day: '화요일',
  }
  const [formValues, setformValues] = useState(DEFAULT_WEBTOON_VALUE)
  const { title, author } = formValues
  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(formValues)
    setformValues(DEFAULT_WEBTOON_VALUE)
  }
  const onChange = (e) => {
    const { name, value } = e.target
    setformValues({
      ...formValues,
      [name]: value,
    })
  }
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="제목을 입력하세요"
        name="title"
        onChange={onChange}
        value={title}
      />
      <Input
        type="text"
        placeholder="작가님을 입력하세요"
        name="author"
        onChange={onChange}
        value={author}
      />
      <Button type="submit">등록</Button>
    </Form>
  )
}

export default WebtoonAddForm
