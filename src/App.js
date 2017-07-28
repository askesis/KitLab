import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonToolbar, Grid, Row, Col, Table } from 'react-bootstrap';
import {data} from './database.js';

var	News	=	React.createClass({  
	render:	function()	{	

		var data = this.props.data;
		var abc = this.props.abc;  
	

			var newsTemplate = data.map(function(item, index) {
				if (abc == true) {
					
				return	(						
					
						<TableBuilder data={item}/>
		
				)	
				}
			})
		
		return (
			<Table striped bordered condensed hover> 
				<thead>
					<tr>
						<th>id</th>
						<th>value</th>
						<th>type</th>
						<th>date</th>
					</tr>
				</thead>
				<tbody>
					{newsTemplate}
				</tbody>
			</Table>
		);
	}
});	

class App extends Component {
  render() {
		
    return (
			<div className="App">
				<h3>Транзакции</h3>	
				<Buttons data={data} />	
			</div>
    );
  }
};


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

var Buttons = React.createClass({

		toggleShow: function() {
			this.setState({
				show: !this.state.show
			});
		},

	getInitialState: function() {
    return {
			show: false,
			filterOne: 0,
    }
	},
	

	
	render(){
		var abc = this.state.show;
		var data = this.props.data;
	

		return(	
			<Grid> 
			
    		<Row className="show-grid"> 
      		<Col xsHidden md={2}> </Col>
      		<Col xs={6} md={8}> 
			
						<ButtonToolbar> 
							<Button
								bsStyle="info"
								bsSize="large"
								href="#"
								target="_blank"
								onClick={ this.toggleShow}
								>
								show me table
							</Button>
						
						<Button
							bsStyle="info"
							bsSize="large"
							href="#"
							target="_blank"
							
						>
							кнпк2
						</Button>
						
						<Button
							bsStyle="info"
							bsSize="large"
							href="#"
							target="_blank">
							кнпк3
							</Button>
						
						<Button
							bsStyle="success"
							bsSize="large"
							href="#"
							target="_blank">
							кнпк4
						</Button>
				
						</ButtonToolbar>

						<News data={data} abc={abc}/>

					</Col>
      		<Col xsHidden md={2}></Col>
  			</Row>
			</Grid>
		)
	}
});

export default App;
