import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Battle from '../components/Battle'

export default class BattleContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { query } = this.props.location
    console.log(`query${query}`)
  }

  render() {
    const { route } = this.props
    return (
      <Battle header={ route.header } />
    )
  }
}
