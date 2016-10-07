import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
   constructor(props) {
      super(props)
      this.state = {
         name: 'Linesh',
         friends: ['Jimmy', 'Shiny', 'Ear']
      }
   }

   render() {
      const { name, friends } = this.state
      return (
         <div className="hello">
            <h3>Welcome, { name }</h3>
            <List friends={ friends }></List>
         </div>
      )
   }
}

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
ReactDOM.render(<Hello />, document.getElementById('app'))