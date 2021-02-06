import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import WebtoonList from '.'

export default {
  title: '웹툰',
  component: WebtoonList,
  decorator: [withKnobs],
}

export const 웹툰_리스트 = () => <WebtoonList />
