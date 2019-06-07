import React from 'react';

    const ButtonPanel = (props) => {
        return (<div className="button-panel">
            <button onClick={props.changeCounterValue}> Zwiększ o x</button>
            <button onClick={props.resetCounterValue}>Zeruj</button>
            <button onClick={props.startCounterValue}>Back to start</button>

        </div>)
    }

export default ButtonPanel;