import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {data} from './database.js';

import TransactionFiltered from "./TransactionFilters";
import TransactionTables from "./TransactionTables";

class App extends Component {
	constructor(props) { //это вот состояния
		super(props);

		this.state = {
			selestedFilters:[],
			inTables: []
		};
	}

handleFilterClick(filter){
	this.setState({
		selectedFilters:{...this.state.selestedFilters, filter}
	});
}
	filterTransactions(data){
		//filter this.state.selectedFilters
		return data;
	}

	render(){
		const inTables = this.filterTransactions(data);
		return(
			<Grid>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<TransactionFiltered onFilterClick={this.handleFilterClick}/>
						<TransactionTables data={data}/>
					</Col>
					<Col md={6}></Col>
				</Row>
			</Grid>
				
		);
	}
}

export default App;

