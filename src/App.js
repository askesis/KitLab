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
			selectedFilters: [],
			inTables: []
		};
	}

handleFilterClick = (filter) => {//функция которая меняет состояние
	this.setState({
    selectedFilters:[...this.state.selectedFilters, filter]
  });
}

finishedData(data){
  this.setState({
    inTables:[...this.state.inTables, data]
  });
  console.log(this.state.inTables);
}


filterTransactions(initialData){
  initialData.forEach(function(item, initialData){
     this.finishedData(item)
  })
   //записывает в состояние
} 

componentWillMount(){
  this.filterTransactions(initialData);
}

	render(){
		const inTables = this.state.inTables;
		return(
			<Grid>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<TransactionFilters handleFilterClick={ this.handleFilterClick}/>
						<TransactionTables finishedData={inTables}/>
					</Col>
					<Col md={6}></Col>
				</Row>
			</Grid>
				
		);
	}
}

export default App;

