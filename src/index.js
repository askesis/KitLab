import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App.jsx';

ReactDOM.render(
 
  <App />,
	document.getElementById('root')
);

registerServiceWorker();


 /*<BrowserRouter basename="/" >
    <div>
     <Route exact path="/" component={App}/>
     <Route path="/form_add" component={FormAdd}/>
    </div>
  </BrowserRouter>, */