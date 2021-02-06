import React from 'react'
import Container from '../shared/container'

import WebtoonItem from './item'

function WebtoonList({ webtoons, onDelete }) {
  return (
    <Container>
      {webtoons.map((webtoon) => (
        <WebtoonItem key={webtoon.id} webtoon={webtoon} onDelete={onDelete} />
      ))}
    </Container>
  )
}

export default WebtoonList
