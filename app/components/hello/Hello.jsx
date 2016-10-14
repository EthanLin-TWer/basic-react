import React, { Component } from 'react'
import List from '../list/List.jsx'


class Hello extends Component {
   constructor(props) {
      super(props)
      this.state = {
         name: 'Linesh',
         friends: [
            {
               name: 'jimmy',
               githubUsername: 'jimmylv',
               imageUrl: 'https://avatars0.githubusercontent.com/u/4997466?v=3&s=400'
            },{
               name: 'doudou',
               githubUsername: 'xiaoheike',
               imageUrl: 'https://avatars3.githubusercontent.com/u/8709486?v=3&s=400'
            },{
               name: 'linesh',
               githubUsername: 'linesh-simplicity',
               imageUrl: 'https://avatars0.githubusercontent.com/u/11895199?v=3&s=400'
            }
         ]
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