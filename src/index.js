import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import App from './App.jsx';
import configureStore from './store/configureStore';

const store = configureStore();
//let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>,
	document.getElementById('root')
);

registerServiceWorker();


 /*<BrowserRouter basename="/" >
    <div>
     <Route exact path="/" component={App}/>
     <Route path="/form_add" component={FormAdd}/>
    </div>
  </BrowserRouter>, */