import React, { Component } from 'react'
import ReactRouter from 'react-router'

export class PromptContainer extends Component {
   constructor(props) {
      super(props)
      this.state = {
         username: ''
      }
      this.onUpdateUser = this.onUpdateUser.bind(this)
      this.onSubmitUser = this.onSubmitUser.bind(this)
   }

   static contextTypes = {
      router: React.PropTypes.object.isRequired
   }

   onUpdateUser(event) {
      this.setState({
         username: event.target.value
      })
      console.log(this.props)
      console.log(PromptContainer.contextTypes)
   }

   onSubmitUser(event) {
      event.preventDefault()
      const player = this.state.username;

      if (this.props.routeParams.playerOne) {

      } else {
         this.props.router.push(`playerTwo/${player}`)
      }
   }

   render() {
      const { route } = this.props
      return (
         <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
            <h1>{route.header}</h1>
            <div className="col-sm-12">
               <form onSubmit={this.onSubmitUser}>
                  <div className="form-group">
                     <input type="text"
                            className="form-control"
                            placeholder="Github username"
                            onChange={this.onUpdateUser}
                            value={this.state.username}
                     />
                  </div>
                  <div className="form-group col-sm-4 col-sm-offset-4">
                     <button className="btn btn-block btn-success"
                             type="submit">
                        Continue
                     </button>
                  </div>
               </form>
            </div>
         </div>

      )
   }
}
