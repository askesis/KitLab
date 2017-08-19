import React, { Component } from 'react';
import FormAdd from './FormAdd.jsx';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class myRoutes extends Component{
  render(){
    return(
    
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/form_add" component={FormAdd}/>
        </div>
    
    )
   }
}

export default myRoutes;