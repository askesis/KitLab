import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom'

import FormAdd from './FormAdd.jsx';
import App from './App.jsx';

ReactDOM.render(
  <BrowserRouter basename="/" >
    <div>
     <Route exact path="/" component={App}/>
     <Route path="/form_add" component={FormAdd}/>
    </div>
  </BrowserRouter>,
	document.getElementById('root')
);

registerServiceWorker();
