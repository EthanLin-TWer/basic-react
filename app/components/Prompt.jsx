import React, { PropTypes, Component } from 'react'

export class Prompt extends Component {
   render() {
      const { username, header, onSubmitUser, onUpdateUser } = this.props
      return (
         <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
            <h1>{header}</h1>
            <div className="col-sm-12">
               <form onSubmit={onSubmitUser}>
                  <div className="form-group">
                     <input type="text"
                            className="form-control"
                            placeholder="Github username"
                            onChange={onUpdateUser}
                            value={username}
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

   componentWillReceiveProps(nextProps, nextContext) {

   }

   static propTypes = {
      username: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      onUpdateUser: PropTypes.func.isRequired,
      onSubmitUser: PropTypes.func.isRequired
   }

}


