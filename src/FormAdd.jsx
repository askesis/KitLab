import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';

import axios from 'axios';
import {transactionAddress} from './config.js';

class FormAdd extends Component {
  constructor(props) { //это вот состояния
	  super(props);
 
		this.state = {
      id: '',
      value:'',
      type:'',
      date:'',
      counterpartId:'',
		};
  }

  handleInputSubmit = e =>{
    e.preventDefault();
    
    axios.post(transactionAddress, this.state)

    .then( response => {
      alert('the id of this transactions ' + response.data.id);
    })
    .catch( error => {
      console.log(error);
    });

    this.setState({
        value: '', 
        type :'', 
        date :'', 
        counterpartId:'',
      })
  }

  handleInputChange(e){  
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  render(){
    return(  
            <form onSubmit={this.handleInputSubmit}>
             <Panel>
              <input type="text" name="value" placeholder="value" value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
    
              <input type="text" name="type" placeholder="type" value={this.state.type} onChange={this.handleInputChange.bind(this)}/>
  
              <input type="text" name="date" placeholder="data" value={this.state.date} onChange={this.handleInputChange.bind(this)}/>

               <input type="text" name="counterpartId" placeholder="counterpartID" value={this.state.counterpartId} onChange={this.handleInputChange.bind(this)}/>
            </Panel>
              <input type="submit"/>
            </form>

    )
  }
}
export default FormAdd;