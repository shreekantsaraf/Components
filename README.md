This is React code... 
This code includes the React components - BankAccount and Balance. 
To use the components, create an index.js file in React as follows -

the BankAccount component has a text box and shows the TotalBalance state. you can change the TotalBalance state by putting a +ve or -ve number value in the text box and c lick on submit. the totalbalance state will change.
we have overriddent (extended) a button and a div components here.
the Balance component is just a formatted div that shows the amount property...
import BankAccount from './Components/BankAccountUsingState/BankAccount';
ReactDOM.render
(
  <BankAccount/>, 
  document.getElementById('root')
);
