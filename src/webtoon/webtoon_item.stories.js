import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import WebtoonItem from '.'

export default {
  title: '웹툰',
  component: WebtoonItem,
  decorator: [withKnobs],
}

export const 웹툰_아이템 = () => <WebtoonItem />
웹툰_아이템.story = {
  webtoon: {
    id: 1,
    title: '연애 혁명',
    author: '232',
    src:
      'https://shared-comic.pstatic.net/thumb/webtoon/570503/thumbnail/thumbnail_IMAG10_023d23be-91f9-46c5-a1ff-152d6238e892.jpg',
    day: '목요일',
  },
}
