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
            if (this.filterValue.value === ''){
            this.getData()
            }
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


    onFilter = () => {
        let value = this.filterValue.value.toUpperCase();
        value = value.trim();

        let currencies = this.state.currencies;

        currencies = currencies.filter(i => {
            return i.waluta.search(value) >-1
            //if nie dzialal:
            // if (i.waluta === value) return i;
        });
        
        
        this.setState({currencies:currencies})



        //!!to poniżej nie działało bo trzeba prenieść do zmiennej
        // this.filterValue = this.filterValue.value.trim();

        // this.filterValue = this.filterValue.value.toLowerCase();

    }


    render() {
        //console.log(this.state.users);
        return <div className="crypto-block">
            <div><i className="fa fa-bitcoin fa-spin" id="bitcoin_spin"></i></div>
            {/* <div><i className="fa fa-spinner fa-spin"></i></div> */}
            <h1 className="main-heading">If I were a rich man,
Yubby dibby dibby dibby dibby dibby dibby dum.
All day long I'd biddy biddy bum.</h1>


            <input 
                placeholder="Filter..."
                ref={input => this.filterValue = input}
                onChange={this.onFilter}
            />



            <CryptoList currencies={this.state.currencies}/>

        </div>            
    }
}


export default Crypto