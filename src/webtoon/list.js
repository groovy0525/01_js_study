import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'

import Item from './item'

function List({ webtoons, onDelete }) {
  return (
    <Container>
      {webtoons.map((webtoon) => (
        <Item key={webtoon.id} webtoon={webtoon} onDelete={onDelete} />
      ))}
    </Container>
  )
}

List.propTypes = {
  webtoons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      src: PropTypes.string,
      day: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
}

export default List
