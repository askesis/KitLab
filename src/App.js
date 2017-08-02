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

 
	filterTransactions(initialData){
    let template=[];
    const filter = this.state.selectedFilters;
    const filter1 = filter.map(function(item, index){
      if (item == 'over1000'){
        let template = initialData.map(function(item, index){
          const value = initialData.value;
          if (value > 1000){
            return(
              item
            )
          }
        })
      }

    })
    return template;
	} 

	render(){
		const inTables = this.filterTransactions(initialData);
		return(
			<Grid>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<TransactionFilters handleFilterClick={ this.handleFilterClick}/>
						<TransactionTables initialData={inTables}/>
					</Col>
					<Col md={6}></Col>
				</Row>
			</Grid>
				
		);
	}
}

export default App;

