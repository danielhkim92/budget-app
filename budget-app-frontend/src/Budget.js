import React, { Component } from 'react';
import './Budget.css';

class Budget extends Component {
  render() {
    return (
      <div className="Budget">
        <h1>Budget<br/></h1>
        <div>
          <h2>Income Streams:<br/></h2>
          <table>
            <thead>
              <th>Name</th>
              <th>Amount</th>
              <th>Frequency</th>
            </thead>
            <tbody>
              <tr>
                <td>Paycheck</td>
                <td>$2000</td>
                <td>2</td>
              </tr>
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
              <tr>
                <td>Mortgage</td>
                <td>$1300</td>
              </tr>
              <tr>
                <td>Internet</td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>$120</td>
              </tr> 
              <tr>
                <td>Liquor</td>
                <td>$00</td>
              </tr>                                         
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Budget;