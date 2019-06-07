import React from 'react';

    const SetStepPanel = (props) => {
        let objInput = null;


        return (<div className="set-value-panel">
            <input type="number" ref={input => objInput = input}></input>
            <button onClick={()=>{props.setStep(parseInt(objInput.value))}}>Ustaw x</button>

        </div>
        );
    }

export default SetStepPanel;