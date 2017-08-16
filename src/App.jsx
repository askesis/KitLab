import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { Button, Grid, Row, Col} from 'react-bootstrap';

import axios from 'axios';
import TransactionFilters from "./TransactionFilters";
import TransactionTables from "./TransactionTables";


import { Route, Link } from 'react-router-dom';

class App extends Component {
	constructor(props) { //это вот состояния
		super(props);

		this.state = {
      initialData:[],
			selectedFilters: {}
		};
  }
  
  componentDidMount() {
    const address = `http://localhost:3004/transactions`;
    axios.get(address)
      .then( (response) => {
        const data = response.data.map( (item,index) => {
          return item
        })
        
        this.setState({
          initialData: data
        }) 
      })

      .catch(function (error) {
        console.log(error);
      });
    
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
		return(
        <Grid>
          <Row>
            <Col md={3}>
               <Button>
                  <Link to='/form_add'>add transaction</Link>
               </Button>
            </Col>
            <Col md={6}>
            
              <TransactionFilters 
                handleFilterClick={this.handleFilterClick} 
                selectedFilters={this.state.selectedFilters}
              />

              <TransactionTables 
                finishedData={this.filterTransactions(this.state.initialData, [this.state.selectedFilters])}
              />

            </Col>
            <Col md={6}></Col>
          </Row>
        </Grid>
	
		);
  }
  
}

export default App;

