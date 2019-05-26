import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Heading from './Heading';
import ButtonPanel from './ButtonPanel';

class App extends Component {

render() {
  return (
    <div className="App">
        <Heading headingText="Aplikacja"/>
        <Counter initValue={33} />

        <Heading headingText="Aplikacja v2"/>
        <Counter initValue={105} />

    </div>
  );
}
}

export default App;
