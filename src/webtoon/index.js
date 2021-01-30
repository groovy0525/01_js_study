import React, { useState } from 'react'

import Container from '../shared/container'
import WebtoonAddForm from './webtoon_form'
import WebtoonList from './webtoon_list'

function Webtoon() {
  const [webtoons, setWebtoons] = useState([
    {
      id: 1,
      title: '연애 혁명',
      author: '232',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/570503/thumbnail/thumbnail_IMAG10_023d23be-91f9-46c5-a1ff-152d6238e892.jpg',
      day: '목요일',
    },
    {
      id: 2,
      title: '더 복서',
      author: '정지훈',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/736989/thumbnail/thumbnail_IMAG10_dc639e95-a787-49bd-9bb6-b835909a764d.jpg',
      day: '목요일',
    },
    {
      id: 3,
      title: '장씨세가 호위무사',
      author: '조형근/김인호',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/728750/thumbnail/thumbnail_IMAG10_d991c7c7-8068-48ce-b03b-54d4df8c8197.jpg',
      day: '월요일',
    },
    {
      id: 4,
      title: '신의 탑',
      author: 'SIU',
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/thumbnail_IMAG10_5e13c29c-f451-4430-a84a-a46495fb8cc3.jpg',
      day: '월요일',
    },
  ])

  const handleDelete = (id) => {
    setWebtoons(webtoons.filter((webtoon) => webtoon.id !== id))
  }

  const handleCreate = (webtoon) => {
    const { title, author, src, day } = webtoon
    const newWebtoon = {
      id: Date.now(),
      title,
      author,
      src,
      day,
    }
    setWebtoons(webtoons.concat(newWebtoon))
  }

  return (
    <Container maxWidth={720} centered>
      <WebtoonAddForm onCreate={handleCreate} />
      <WebtoonList webtoons={webtoons} onDelete={handleDelete} />
    </Container>
  )
}

export default Webtoon
