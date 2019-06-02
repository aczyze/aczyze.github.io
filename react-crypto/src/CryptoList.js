import React from 'react';


const CryptoList = (props) => {
    //console.log(props.users);
    return (

        
        <ul className="crypto-list">

            <span>komponent dziecko</span>

        {/* map to wazna funcja, pozwala tu ziterowac z tablicy */}
        {props.users.map(currentRate =>
            <li key={currentRate.id}>{currentRate.name}</li>
        )}

        </ul>
    )
  
}


export default CryptoList