import React, { useState } from 'react'

import Container from '../shared/container'
import Form from './form'
import List from './list'
import { MOCK_WEBTOONS } from './constants'

function Webtoon() {
  const [webtoons, setWebtoons] = useState(MOCK_WEBTOONS)

  const handleDelete = (id) => {
    setWebtoons(webtoons.filter((webtoon) => webtoon.id !== id))
  }

  const onAddWebtoon = (webtoon) => {
    setWebtoons([
      ...webtoons,
      {
        id: Date.now(), // uuid
        ...webtoon,
      },
    ])
  }

  return (
    <Container>
      <Form onAddWebtoon={onAddWebtoon} />
      <List webtoons={webtoons} onDelete={handleDelete} />
    </Container>
  )
}

export default Webtoon
