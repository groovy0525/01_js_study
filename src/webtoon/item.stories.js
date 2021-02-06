import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Item from './item'

export default {
  title: '웹툰/아이템',
  component: Item,
  decorator: [withKnobs],
}

export const 아이템 = () => (
  <Item
    webtoon={{
      id: 1,
      title: text('title', '연애 혁명'),
      author: text('author', '232'),
      src:
        'https://shared-comic.pstatic.net/thumb/webtoon/570503/thumbnail/thumbnail_IMAG10_023d23be-91f9-46c5-a1ff-152d6238e892.jpg',
      day: text('day', '목요일'),
    }}
  />
)
