import React, { Component } from 'react';
import Budget from "./Budget.js"

      const budget = {
        "incomeStreams": [
          {
            "name": "Paycheck",
            "amount": 2000,
            "frequency": 2,
          },
          {
            "name": "Consulting",
            "amount": 300,
            "frequency": 1,
          },          
        ],
        "expenses": [
          {
            "name": "Mortgage",
            "amount": 1300,
          },
          {
            "name": "Internet",
            "amount": 60,
          },
          {
            "name": "Phone",
            "amount": 120,
          },
          {
            "name": "Liquor",
            "amount": 399,
          },
        ],
      };

class App extends Component {

  render() {
    return (
      <div className="App">
        <Budget {...budget}/>
      </div>
    );
  }
}

export default App;
