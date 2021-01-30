import React from 'react'
import { withKnobs, number, boolean } from '@storybook/addon-knobs'

import Container from './container'

export default {
  title: '공통 컴포넌트',
  component: Container,
  decorator: [withKnobs],
}

export const 컨테이너 = () => (
  <Container
    maxWidth={number('maxWidth', 0)}
    centered={boolean('centered', false)}
  >
    공통 컨테이너
  </Container>
)
