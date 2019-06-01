import React, {Component} from 'react';
import UsersList from './UsersList';


    class Users extends Component {
        constructor(props) {
            super(props)
            this.state = {
                userName : ''
            }
        }e
        
        onInputChange = (event) => {
            this.setState({userName: event.target.value});
            console.log(event.target.value);
        }

        render() {
            return <div className="users-block">
                <h1 className="main-heading">heading</h1>
                    {/* gdybym chial form to trzeba prevent default */}
                    <input value={this.state.userName} onChange={this.onInputChange}/>
                    <button>добави ебанутово ползователя</button>
                <UsersList />

            </div>            
        }
    }




export default Users