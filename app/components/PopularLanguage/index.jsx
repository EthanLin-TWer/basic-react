import React from 'react'
import PropTypes from 'prop-types'

const PopularLanguage = ({ language = ' chinese ' }) => (
  <div>
    { language }
  </div>
)


PopularLanguage.propTypes = {
  language: PropTypes.string,
}

export default PopularLanguage
