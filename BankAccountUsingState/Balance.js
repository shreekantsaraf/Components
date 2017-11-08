import React from 'react';
import ReactDOM from 'react-dom';


export default class Balance extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return (nextProps.amount !== this.props.amount);
    }
  
    render() {
      console.log('balance render');
      return <h3>Account Balance: ${this.props.amount}</h3>;
    }
  }
  