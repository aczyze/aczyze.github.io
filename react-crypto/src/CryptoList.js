import React from 'react';


const CryptoList = (props) => {
    //console.log(props.users);


    return (
        
        <div className="crypto-list">

        {/* gdyby to byla klasa to dodatkowo this. */}
        {props.currencies.map(currentRate =>
            <p key={currentRate.waluta}>
                <strong>Last rate: </strong>
                <span className={currentRate.class}>{currentRate.lastRate}&nbsp;</span>
                <span>{currentRate.waluta}&nbsp;</span>
                <span>[{currentRate.symbol}]&nbsp;</span>
            </p>

        )}

        </div>

        //Ponizej moje jako tako dzialalo
            // <ul className="crypto-list">

            // {/* map to wazna funcja, pozwala tu ziterowac z tablicy */}
            // {props.currencies.map(currentRate =>
            //     <li key={currentRate.waluta}><div>{currentRate.lastRate}</div> {currentRate.waluta} {currentRate.symbol}</li>
            // )}

            // </ul>
    )
  
}


export default CryptoList