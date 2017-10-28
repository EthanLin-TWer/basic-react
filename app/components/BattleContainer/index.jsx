import React from 'react'
import PropTypes from 'prop-types'
import Battle from '../Battle'

const BattleContainer = ({ route }) => (
  <Battle header={ route.header } />
)


BattleContainer.propTypes = {
  route: PropTypes.object.isRequired,
}

export default BattleContainer
