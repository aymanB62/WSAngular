import React from 'react';
class MessageWithEvent extends React.Component {
 constructor(props) {
 super(props);
 this.logEventToConsole = this.logEventToConsole.bind();
 }
 logEventToConsole(e) {
 console.log(e.target.innerHTML);
 }
 render() {
 return (
 <div onClick={this.logEventToConsole}>
 <p>Hello {this.props.name}!</p>
 </div>
 );
 }
}
export default MessageWithEvent;