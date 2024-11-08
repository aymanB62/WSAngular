import React from 'react';
import ReactDOM from 'react-dom';
import MessageWithEvent from './MessageWithEvent'
ReactDOM.render(
 <React.StrictMode>
 <div>
 <MessageWithEvent name="React" />
 <MessageWithEvent name="React developer" />
 </div>
 </React.StrictMode>,
 document.getElementById('root')
);
