import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {initialData} from './database.js';

import TransactionFilters from "./TransactionFilters";
import TransactionTables from "./TransactionTables";
import FormAdd from './FormAdd.jsx';

import {
  BrowserRouter ,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
	constructor(props) { //это вот состояния
		super(props);

		this.state = {
			selectedFilters: {},
		};
	}

  handleFilterClick = filter => {// проверку сделать
    this.setState({
      selectedFilters: {...this.state.selectedFilters, [filter]: !this.state.selectedFilters[filter]  }}
    )
  }


  filterTransactions(data, filters){
    let filteredData = data;
    const {selectedFilters} = this.state;

    if (selectedFilters['over1000']){
      filteredData = filteredData.filter( (item, index) => {
        return item.value > 1000;
      })
    }

    if (selectedFilters['consumption']){
      filteredData = filteredData.filter( (item, index) => {
        return item.type === 'consumption';
      })
    }

    if (selectedFilters['income']){
      filteredData = filteredData.filter( (item, index) => {
        return item.type === 'income';
      })
    }
  
    if (selectedFilters['perMonth']){
      filteredData = filteredData.filter( (item, index) => {
      return Date.now() - Date.parse(item.date) < 2592000000 ;
      })
    }
    
    return filteredData;
  
  } 

	render(){
        // using CommonJS modules 
    // var Router = require('react-router').Router
    // var Route = require('react-router').Route
    // var Switch = require('react-router').Switch
		return(
     
        <Grid>
          <Row>
            <Col md={3}>
                <Link to='/form_add'>add </Link>
            </Col>
            <Col md={6}>
            
              <TransactionFilters 
                handleFilterClick={this.handleFilterClick} 
                selectedFilters={this.state.selectedFilters}
              />

              <TransactionTables 
                finishedData={this.filterTransactions(initialData, [this.state.selectedFilters])}
              />

            </Col>
            <Col md={6}></Col>
          </Row>
        </Grid>
	
		);
  }
  
}

export default App;

