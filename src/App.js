import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonToolbar, Grid, Row, Col, Table } from 'react-bootstrap';
import {data} from './database.js';

var	News	=	React.createClass({  
	
	toggleShow: function() {
			this.setState({
				show: !this.state.show
			});
		},


	getInitialState: function() {
    return {
      show: false
    }
  },
	
	render:	function()	{	
		var data = this.props.data;
		var abc = this.state.show ? true : false;

			var newsTemplate = data.map(function(item, index) {
				if (abc == true) {
				return	(						
					
						<TableBuilder data={item}/>
		
				)	
				}
			})
		
		return (
			<div>
			<Button
				bsStyle="info"
				bsSize="large"
				href="#"
				target="_blank"
				onClick={this.toggleShow}
				>
				Value over 1000
			</Button>

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
			</div>
		);
	}
});	

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
									<News	data={data} />
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

class Buttons extends Component{
	render(){
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
								>
								Value over 1000
							</Button>
						
						<Button
							bsStyle="info"
							bsSize="large"
							href="#"
							target="_blank"
						>
							выбрать income
						</Button>
						
						<Button
							bsStyle="info"
							bsSize="large"
							href="#"
							target="_blank">
							показать таблицу
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
      		<Col xsHidden md={2}></Col>
  			</Row>
			</Grid>
		)
	}
};

export default App;
