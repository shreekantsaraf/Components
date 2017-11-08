import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Balance from './Balance';



export default class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalAccountBalance: 200,
            amounttoIncrease:0,
            savingsAccount: { accountBalance: 25.00 },
            checkingAccount: { accountBalance: 30.00 }
        }
    }
    fnCallBack()
    {
        console.log("state changed now "+this.state.totalAccountBalance);
    }
    changeState()
    {
         this.setState({
            totalAccountBalance: this.state.totalAccountBalance +this.state.amounttoIncrease
            }
         , this.fnCallBack.bind(this)) ;
    }

    updateAmount(event) {
        this.setState({amounttoIncrease:parseFloat(event.target.value)})
    }
    render() {
        return (
            <div>
                <Balance amount={this.state.totalAccountBalance} />
                <h3> Total Account Balance: {this.state.totalAccountBalance}</h3>
                <h3> Savings Account Balance: {this.state.savingsAccount.accountBalance}</h3>
                <h3> Checking Account Balance: {this.state.checkingAccount.accountBalance}</h3>
                <input type="number" onChange = {this.updateAmount.bind(this)} value={this.state.amounttoIncrease}/>
                <button onClick={this.changeState.bind(this)} >Mutton</button>
            </div>
        );
    }
}
/*
ReactDOM.render(
<BankAccount/>
, document.getElementById('root'));
*/

