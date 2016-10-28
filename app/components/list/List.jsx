import React, { Component } from 'react'

const ProfileImage = ({imageUrl}) => (
   < img src={imageUrl} alt="" style={{height: 100, width: 100}}/>
)
const ProfileLink = ({username}) => (
   <div>
      <a href={`https://github.com/${username}`}>{username}</a>
   </div>
)

const ProfileName = ({children}) => ( <div>{children}</div> )

class List extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      const friends = this.props.friends.map(friend => (
         <li>
            <ProfileImage imageUrl={friend.imageUrl} />
            <ProfileLink username={friend.githubUsername} />
            <ProfileName> {friend.name} </ProfileName>
         </li>
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