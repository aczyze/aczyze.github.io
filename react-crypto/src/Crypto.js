import React, {Component} from 'react';
import CryptoList from './CryptoList';
// axios mushe zainstalowac przez git basha npm install axios
import axios from 'axios';


class Crypto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currencies: []
        }
    }
    
    componentDidMount() {
        this.getData();

        setInterval(() => {
            this.getData()
        },5000);

    }

    getData = () => {
        // https://www.npmjs.com/package/axios
        axios.get('https://blockchain.info/pl/ticker')
            .then(response => {
                let data = response.data;
                let currenciesNew = [];
                let currencies = this.state.currencies;
                
                data = Object.keys(data).map(waluta => {
                    let newObject = {
                        waluta: waluta,
                        lastRate: data[waluta].last,
                        symbol: data[waluta].symbol
                    };


                    //find znajdzie nam element bez podania numeru
                    let oldObject = currencies.find(oldObject => {
                        if (oldObject.waluta === newObject.waluta) return oldObject;
                    });

                    if (oldObject !== undefined) {
                        if (oldObject.lastRate < newObject.lastRate) {
                            newObject.class = 'green';
                        } else if (oldObject.lastRate>newObject.lastRate) {newObject.class = 'red';
                        } else { 
                            newObject.class = 'blue';  
                        }
                    }

                    currenciesNew.push(newObject);
                    //console.log(object);

                });

                this.setState({currencies: currenciesNew})
                //console.log(this.state.currencies)


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

//<i class="fab fa-bitcoin"></i>

    render() {
        //console.log(this.state.users);
        return <div className="crypto-block">
            <div><i className="fa fa-bitcoin fa-spin" id="bitcoin_spin"></i></div>
            {/* <div><i className="fa fa-spinner fa-spin"></i></div> */}
            <h1 className="main-heading">If I were a rich man,
Yubby dibby dibby dibby dibby dibby dibby dum.
All day long I'd biddy biddy bum.</h1>
            <input value={this.state.currName}/>
            {/* <button onClick={this.addNewUser}>pick currency</button> */}
            <CryptoList currencies={this.state.currencies}/>

        </div>            
    }
}


export default Crypto