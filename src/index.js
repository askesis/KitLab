import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers'
import App from './App.jsx';


//let store = createStore(todoApp)

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