import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';
import SetStepPanel from './SetStepPanel';

class Counter extends Component {

    // co to jest ten super, jak zadziałały połączenia z przyciskiem??
    //cos podobnego mozna sobie zrobic w czystym javascript (...props)
    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1,
        }
    }

    changeValue = () => {
        this.setState((prevValue)=> {
            return ({
                counterValue:prevValue.counterValue + prevValue.stepValue
            });
        });
        
    }

    setValue = (newValue) => {
        this.setState({counterValue:newValue}); //w ten sposob na pewno zaladuje sie w odpowiedniej kolejnosci
        //this.state.counterValue=5;    ---    tak nie robić, chodzi o asynchronicznosc
    }

    setStep = (newStepValue) => {
        this.setState({stepValue:newStepValue});
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
                <SetStepPanel  setStep={this.setStep}/>
            </div>
        );
    }

}

export default Counter;
//ten export oznacza, ze element jest publiczny (musi byc default)