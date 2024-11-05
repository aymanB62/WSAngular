import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseEntryItem from './ExpenseEntryItem'; // your component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const item = {
  id: 1,
  name: "Dinner",
  amount: 50,
  spendDate: new Date(2024, 9, 16),
  category: "Food"
};
root.render(
  <React.StrictMode>
      <ExpenseEntryItem 
      id= {item.id}
      name={item.name} 
      amount={item.amount} 
      spendDate={item.spendDate} 
      category={item.category}
    />
  </React.StrictMode>
);
reportWebVitals();
