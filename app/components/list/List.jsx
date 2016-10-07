import React, { Component } from 'react'

class List extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      const friends = this.props.friends.map(friend => (
         <li>{friend}</li>
      ))
      return (
         <div className="friends">
            <h3>Friends</h3>
            <ul>
               {friends}
            </ul>
         </div>
      )
   }
}

export default List