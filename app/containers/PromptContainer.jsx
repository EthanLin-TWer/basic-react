import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Prompt } from '../components/Prompt'

export class PromptContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }

    this.handleUpdateUser = this.handleUpdateUser.bind(this)
    this.handleSubmitUser = this.handleSubmitUser.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmitUser(event) {
    event.preventDefault()
    const { router, routeParams } = this.props
    const current = this.state.username;
    this.setState({ username: '' })

    if (!routeParams.playerOne) {
      router.push(`/playerTwo/${current}`)
    } else {
      router.push({
        pathname: '/battle',
        query: {
          playerOne: routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    }
  }

  render() {
    const { route } = this.props
    return (
      <Prompt username={ this.state.username } header={ route.header }
              onUpdateUser={ this.handleUpdateUser }
              onSubmitUser={ this.handleSubmitUser }
      />

    )
  }
}
