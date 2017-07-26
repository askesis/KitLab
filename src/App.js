import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonToolbar, Grid, Row, Col, Table } from 'react-bootstrap';
import {data} from './database.js';
	
var	News	=	React.createClass({  
	render:	function()	{	
		var data = this.props.data;

			var newsTemplate = data.map(function(item, index) {
				if (item.value > '1000') {
				return	(						
					
						<TableBuilder data={item}/>
		
				)	
				}
			})
		
	//return method render components news
		return (
			<tbody>
				{newsTemplate}
			</tbody>
		);
	}
});	

class Buttons extends Component{
	
	sort(something){

	}

	render(){
		return(	
			<Grid> 
			
    		<Row className="show-grid"> 
      		<Col xsHidden md={3}> </Col>
      		<Col xs={6} md={6}> 
			
						<ButtonToolbar> 
							<Button
								bsStyle="info"
								bsSize="large"
								href="#"
								target="_blank"
								onclick={}>
								Value over 1000
							</Button>
						
						<Button
							bsStyle="info"
							bsSize="large"
							href="#"
							target="_blank">
							ButtonTwo
						</Button>
						
						<Button
							bsStyle="info"
							bsSize="large"
							href="#"
							target="_blank">
							ButtonThree
							</Button>
						
						<Button
							bsStyle="success"
							bsSize="large"
							href="#"
							target="_blank">
							ButtonFour
						</Button>
				
						</ButtonToolbar>
					</Col>
      		<Col xsHidden md={3}></Col>
  			</Row>
			</Grid>
		)
	}
};

class App extends Component {
  render() {
    return (
			<div className="App">
					<Buttons/>			
					<h3>Транзакции</h3> 
					<Grid> 
						<Row>
							<Col md={2}></Col>
							<Col md={8}>
								<Table striped bordered condensed hover> 
									<thead>
									<tr>
										<th>id</th>
										<th>value</th>
										<th>type</th>
										<th>date</th>
									</tr>
									</thead>
																
									<News	data={data} />

									</Table>
							</Col>
							<Col md={2}></Col>
						</Row>
					</Grid>	
			</div>
    );
  }
};

//строим таблицу
var TableBuilder = React.createClass({ 
	render(){
		var id = this.props.data.id,
				value = this.props.data.value,
				type = this.props.data.type,
				date = this.props.data.date;
	

					return (	
						<tr >
							<td>{id}</td>
							<td>{value}</td> 
							<td>{type}</td>
							<td>{date}</td>
						</tr>
					)
				
	}
});

export default App;
