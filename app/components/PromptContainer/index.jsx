import React, { Component } from 'react'
import PropTypes from 'prop-types'

import autobind from 'autobind-decorator'

import Prompt from '../Prompt'

export default class PromptContainer extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  @autobind
  handleUpdateUser(event) {
    this.setState({
      username: event.target.value,
    })
  }

  @autobind
  handleSubmitUser(event) {
    event.preventDefault()
    const { router, routeParams } = this.props
    const current = this.state.username
    this.setState({
      username: '',
    })

    if (!routeParams.playerOne) {
      router.push(`/playerTwo/${current}`)
    } else {
      router.push({
        pathname: '/battle',
        query: {
          playerOne: routeParams.playerOne,
          playerTwo: this.state.username,
        },
      })
    }
  }

  render() {
    const { route } = this.props
    return (
      <Prompt
        username={ this.state.username }
        header={ route.header }
        onUpdateUser={ this.handleUpdateUser }
        onSubmitUser={ this.handleSubmitUser }
      />
    )
  }
}
