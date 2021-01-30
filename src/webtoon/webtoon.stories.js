import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Webtoon from '.'

export default {
  title: '웹툰',
  component: Webtoon,
  decorator: [withKnobs],
}

export const 웹툰_아이템 = () => <Webtoon />
