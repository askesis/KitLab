import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {initialData} from './database.js';

import TransactionFilters from "./TransactionFilters";
import TransactionTables from "./TransactionTables";

class App extends Component {
	constructor(props) { //это вот состояния
		super(props);

		this.state = {
			selectedFilters: {},
		};
	}

  handleFilterClick = filter => {// проверку сделать
    this.state.selectedFilters[filter] ? this.setState({ selectedFilters:{...this.state.selectedFilters, [filter]:false} }) : this.setState({ selectedFilters:{...this.state.selectedFilters, [filter]:true} })
  }


  filterTransactions(data, filters){
    let filteredData = data;
    
    if (this.state.selectedFilters['over1000']){
      filteredData = filteredData.filter( (item, index) => {
        return item.value > 1000;
      })
    }

    if (this.state.selectedFilters['consumption']){
      filteredData = filteredData.filter( (item, index) => {
        return item.type == 'consumption';
      })
    }

    if (this.state.selectedFilters['income']){
      filteredData = filteredData.filter( (item, index) => {
        return item.type === 'income';
      })
    }
  
    if (this.state.selectedFilters['perMonth']){
      filteredData = filteredData.filter( (item, index) => {
      return Date.now() - Date.parse(item.date) < 2592000000 ;
      })
    }
    
    return filteredData;
  
  } 

	render(){
		return(
			<Grid>
				<Row>
					<Col md={3}></Col>
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

