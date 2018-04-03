import React, { Component } from 'react';
import './Budget.css';

class IncomeStream extends Component {
  render() {
    return(
             <tr>
                <td>{this.props.name}</td>
                <td>{this.props.amount}</td>
                <td>{this.props.frequency}</td>
              </tr>
      );
  };
};

class Expense extends Component {
  render() {
    return(
             <tr>
                <td>{this.props.name}</td>
                <td>{this.props.amount}</td>
              </tr>
      );
  };  
}

class Budget extends Component {


  render() {

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

      const incomeStreamComponents = budget.incomeStreams.map(incomeStreamObject => {
        return (
          <IncomeStream {...incomeStreamObject}/>
          )
      })

      const expenses = budget.expenses.map(expenseObject => {
        return (
            <Expense {...expenseObject}/>
            )
      })


    return (
      <div className="Budget">
        <h1>Budget<br/></h1>
        <div>
          <h2>Income Streams:<br/></h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {incomeStreamComponents}
            </tbody>
          </table>
        </div>

        <div>
          <h2>Expenses:<br/></h2>
          <table>
            <thead>
              <th>Name</th>
              <th>Amount</th>
            </thead>
            <tbody>
              {expenses}                                     
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Budget;