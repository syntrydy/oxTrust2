import React, { Component } from 'react'
import UserItem from './UserItem';
import MySpinner from './MySpinner';

class UserList extends Component {
    render() {

        if(this.props.loading){
           return <MySpinner></MySpinner>
        } 
        return (
            <div className="row">
               {this.props.users.map(user => (
                 <UserItem key={user.id} user={user}/>
               ))} 
            </div>
        )
    }
}

export default UserList
