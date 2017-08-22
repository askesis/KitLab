import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col} from 'react-bootstrap';

import axios from 'axios';
import TransactionFilters from "./TransactionFilters";
import TransactionTables from "./TransactionTables";
import {transactionAddress} from './config';


class TablePlusFilters extends Component {
	constructor(props) {
		super(props);

		this.state = {
      initialData:[],
			selectedFilters: {}
		};
  }
  
  componentDidMount() {
    axios.get(transactionAddress)

    .then( response => {
      const data = response.data.map( (item, index) => {
        return item;
      })
      this.setState({
        initialData: data
      }) 
    })
    .catch( error => {
      console.log(error);
    });
    
  }

  handleFilterClick = filter => {
    this.setState({
      selectedFilters: {...this.state.selectedFilters, [filter]: !this.state.selectedFilters[filter]  }}
    )
  }


  filterTransactions(data, filters){
    let filteredData = data;

    if (filters.over1000){
      filteredData = filteredData.filter( (item, index) => {
        return item.value > 1000;
      })
    }

    if (filters.consumption){
      filteredData = filteredData.filter( (item, index) => {
        return item.type === 'consumption';
      })
    }

    if (filters.income){
      filteredData = filteredData.filter( (item, index) => {
        return item.type === 'income';
      })
    }
  
    if (filters.perMonth){
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
          <Col  xsHidden md={2}></Col>
          <Col md={8}>
          
            <TransactionFilters 
              handleFilterClick={this.handleFilterClick} 
              selectedFilters={this.state.selectedFilters}
            />

            <TransactionTables 
              finishedData={this.filterTransactions(this.state.initialData, this.state.selectedFilters)}
            />

          </Col>
          <Col xsHidden md={2}></Col>
        </Row>
      </Grid>
		);
  }
}

export default TablePlusFilters;

