import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';

class Counter extends Component {

    // co to jest ten super, jak zadziałały połączenia z przyciskiem??
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        }
    }

    changeValue = () => {
        this.setState((prevValue)=> {
            return ({
                counterValue:prevValue.counterValue +1
            });
        });
    }

    setValue = (newValue) => {
        this.setState({counterValue:newValue});
    }

    resetValue = () => {
        this.setState({counterValue:0});
    }

    
    startValue = () => {
        this.setState({counterValue:this.props.initValue});
    }


    render () {
        return (
            <div className="counter">
                Licznik: {this.state.counterValue}
                <ButtonPanel changeCounterValue={this.changeValue} resetCounterValue={this.resetValue} startCounterValue={this.startValue}/>
                <SetValuePanel setCounter={this.setValue}/>
            </div>
        );
    }

}

export default Counter;