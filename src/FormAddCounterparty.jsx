import React, { Component } from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

import axios from 'axios';
import {counterpartyAddress} from './config.js';

class FormAddCounterparty extends Component {
  constructor(props) { //это вот состояния
	  super(props);
 
		this.state = {
      id: '',
      name :'',
		};
  }

  handleInputSubmit = e =>{
   // e.preventDefault();
    
    axios.post(counterpartyAddress, this.state)

    this.setState({
        name:'',
      })
  }

  handleInputChange(e){  
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  render(){
    return(  
      
            <Panel>
              <form onSubmit={this.handleInputSubmit}>
   
                <input type="text" name="name" placeholder="type" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
    
                <input type="submit"/>
              
              </form>
            </Panel>
        
    )
  }
}
export default FormAddCounterparty;