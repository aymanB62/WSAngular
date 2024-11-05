import React from 'react'
import styles from './ExpenseEntryItem.module.css'
class ExpenseEntryItem extends React.Component {
 constructor(props) {
 super(props);
 }
 render() {
 return (
 <div class = "itemStyle">
    <div><b>Id:</b> <em>{this.props.id}</em></div>
    <div><b>Item:</b> <em>{this.props.name}</em></div>
    <div><b>Amount:</b> <em>{this.props.amount}</em></div>
    <div><b>Spend Date:</b>
    <em>{this.props.spendDate.toString()}</em></div>
    <div><b>Category:</b> <em>{this.props.category}</em></div>
 </div>
 );
 }
}
export default ExpenseEntryItem;