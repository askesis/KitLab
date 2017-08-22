import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import App from './App.jsx';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>,
	document.getElementById('root')
);

registerServiceWorker();