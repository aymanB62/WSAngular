import React, { Component } from "react";
import "./App.css";

class ExpenseEntryItem extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props); // Call the parent class' constructor (required)
    
  }

  render() {
    return (
      <div className="HelloWorld">
        <header className="HelloWorld-header">
          <p className="text"><b>Item</b>: {this.props.name}</p>
          <p className="text"><b>Amount</b>: {this.props.amount}</p>
          <p className="text"><b>Spend Date</b>: {this.props.spendDate.toString()}</p>
          <p className="text"><b>Category</b>: {this.props.category}</p>
        </header>
      </div>
    );
  }
}

export default ExpenseEntryItem;
