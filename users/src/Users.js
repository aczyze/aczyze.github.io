import React, {Component} from 'react';
import UsersList from './UsersList';


    class Users extends Component {
        constructor(props) {
            super(props)
            this.state = {
                userName : '',
                users: []
            }
        }
        
        onInputChange = (event) => {
            this.setState({userName: event.target.value});
        }

        addNewUser = () => {
            let user = {
                name: this.state.userName,
                id: Date.now()
            }

            this.setState(prevState => {
                return({
                    users: prevState.users.concat(user),
                    userName : ''
                })
            })
        }

        removeUser = (id,name) => {
            let users = this.state.users;
            users = users.filter(currentUser => {
                if (currentUser.id !== id) return currentUser
            })
            this.setState({users})//moze byc jedno users bo te elementy tak samo sie nazywaja
            // this.setState({users:users})
            //albo tak:
            // this.setState(prevState => {
            //     return ({users};)
            // })
        }

        render() {
            //console.log(this.state.users);
            return <div className="users-block">
                <h1 className="main-heading">heading</h1>
                {/* gdybym chial form to trzeba prevent default */}
                <input value={this.state.userName} onChange={this.onInputChange}/>
                <button onClick={this.addNewUser}>добави ебанутого пользователя</button>
                <UsersList users={this.state.users}
                removeUser={this.removeUser} />

            </div>            
        }
    }




export default Users