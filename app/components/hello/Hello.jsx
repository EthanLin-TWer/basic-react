import React, { Component } from 'react'
import List from '../list/List.jsx'

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

export default Hello