import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';

class Counter extends Component {

    // co to jest ten super, jak zadziałały połączenia z przyciskiem??
    //cos podobnego mozna sobie zrobic w czystym javascript (...props)
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
        this.setState({counterValue:newValue}); //w ten sposob na pewno zaladuje sie w odpowiedniej kolejnosci
        //this.state.counterValue=5;    ---    tak nie robić, chodzi o asynchronicznosc
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
//ten export oznacza, ze element jest publiczny (musi byc default)