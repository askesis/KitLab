import React, { Component } from 'react';
import {Grid, Row, Button, Col, Panel} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import {serverAddress} from './config.js';
import Menu from './menu.jsx'

class FormAdd extends Component {
  constructor(props) { //это вот состояния
	  super(props);
 
		this.state = {
      id: '',
      value:'',
      type:'',
      date:''
		};
  }

  handleInputSubmit = e =>{
    e.preventDefault();
    
    axios.post(serverAddress, this.state)

    .then( response => {
      alert('the id of this transactions ' + response.data.id);
    })
    .catch( error => {
      console.log(error);
    });

    this.setState({
        value: '', type :'', date :'' 
      })
  }

  handleInputChange(e){  
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  render(){
    return(  
      <Grid>
        <Row>
          <Col md={2}>
             <Menu/>
          </Col>

          <Col md={8}>
            <form onSubmit={this.handleInputSubmit}>
             <Panel>
              <input type="text" name="value" placeholder="value" value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
    
              <input type="text" name="type" placeholder="type" value={this.state.type} onChange={this.handleInputChange.bind(this)}/>
  
              <input type="text" name="date" placeholder="data" value={this.state.date} onChange={this.handleInputChange.bind(this)}/>
           </Panel>
              <input type="submit"/>
            </form>
          </Col>

          <Col md={2}>
          </Col>

        </Row>
      </Grid>
    )
  }
}
export default FormAdd;