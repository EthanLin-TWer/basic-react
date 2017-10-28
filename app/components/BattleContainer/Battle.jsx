import React from 'react'
import PropTypes from 'prop-types'

const Battle = ({ header }) => (
  <div className="Battle">
    <h1>{ header }</h1>
  </div>
)

Battle.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Battle
