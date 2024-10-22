import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseEntryItem from './ExpenseEntryItem'; // your component

const item = {
  name: "Dinner",
  amount: 50,
  spendDate: new Date(2024, 9, 16),
  category: "Food"
};

ReactDOM.render(
  <React.StrictMode>
    <ExpenseEntryItem 
      name={item.name} 
      amount={item.amount} 
      spendDate={item.spendDate} 
      category={item.category}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
