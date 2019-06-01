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

        render() {
            //console.log(this.state.users);
            return <div className="users-block">
                <h1 className="main-heading">heading</h1>
                {/* gdybym chial form to trzeba prevent default */}
                <input value={this.state.userName} onChange={this.onInputChange}/>
                <button onClick={this.addNewUser}>добави ебанутово ползователя</button>
                <UsersList users={this.state.users} />

            </div>            
        }
    }




export default Users