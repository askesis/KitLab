import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {data} from './database.js';

import TransactionFilters from "./TransactionFilters";
import TransactionTables from "./TransactionTables";

class App extends Component {
	constructor(props) { //это вот состояния
		super(props);

		this.state = {
			selectedFilters:[],
			inTables: []
		};
	}

handleFilterClick = (filter) => {//функция которая меняет состояние. Ее нужно вызвать чтобы поменять
 //состояние  MyCallBack
	this.setState({
    selectedFilters:{...this.state.selectedFilters, filter}
  });
 console.log(this.props.selectedFilters);
}

 
	filterTransactions(data){
//some code here
		return data;
	} 

	render(){
		const inTables = this.filterTransactions(data);
		return(
			<Grid>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<TransactionFilters handleFilterClick={ this.handleFilterClick}/>
						<TransactionTables data={inTables}/>
					</Col>
					<Col md={6}></Col>
				</Row>
			</Grid>
				
		);
	}
}

export default App;

