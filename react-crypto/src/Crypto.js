import React, {Component} from 'react';
import CryptoList from './CryptoList';
// axios mushe zainstalowac przez git basha npm install axios
import axios from 'axios';


class Crypto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currName : '',
            currencies: []
        }
    }
    
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // https://www.npmjs.com/package/axios
        axios.get('https://blockchain.info/pl/ticker')
            .then(response => {
                let data = response.data;
                let currencies = this.state.currencies;
                
                data = Object.keys(data).map(waluta => {
                    let object = {
                        waluta: waluta,
                        lastRate: data[waluta].last,
                        symbol: data[waluta].symbol
                    };

                    currencies.push(object);
                    //console.log(object);

                });

                this.setState({currencies:currencies})
                console.log(this.state.currencies)


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
            <CryptoList users={this.state.currencies}/>

        </div>            
    }
}


export default Crypto