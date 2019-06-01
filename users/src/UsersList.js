import React, {Component} from 'react';

const UsersList = (props) => {
    //console.log(props.users);
    return (

        <ul className="main-list">

        {/* map to wazna funcja, pozwala tu ziterowac z tablicy */}
        {props.users.map(currentUser =>
            <li key={currentUser.id}>{currentUser.name}</li>
        )}

        </ul>
    )

  
}


export default UsersList