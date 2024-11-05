import React from 'react';
class FormattedMoney extends React.Component {
constructor(props) {
super(props)
}
format(amount) {
return parseFloat(amount).toFixed(2)
}
render() {
return (
<div>{this.format(this.props.value)}</div>
);
}
}
export default FormattedMoney;