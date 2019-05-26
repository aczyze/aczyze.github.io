import React from 'react';

    const SetValuePanel = (props) => {
        let objInput = null;


        return (<div className="set-value-panel">
            <input type="number" ref={input => objInput = input}></input>
            <button onClick={()=>{props.setCounter(parseInt(objInput.value))}}>Ustaw</button>

        </div>
        );
    }

export default SetValuePanel;