import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';

import axios from 'axios';
import {transactionAddress, counterpartyAddress} from './config.js';

class FormAdd extends Component {
  constructor(props) { //это вот состояния
	  super(props);
 
		this.state = {
      id: '',
      value:'',
      type:'consumption',
      date:'',
      counterpartId:'',
      selectCounterpartId:[],
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount(){
    axios.get(counterpartyAddress)
    .then( response => {
      const data = response.data.map( (item, index)=>{
        return item
      })
     
    this.setState({
      selectCounterpartId: data,
    })
    
    })
    
  }

  handleInputSubmit = e =>{
    axios.post(transactionAddress, this.state)
    .then( response => {
      alert('the id of this transactions ' + response.data.id);
    })
    .catch( error => {
      console.log(error);
    });
  }

  handleInputChange(e){  
    this.setState({
      [e.target.name]:e.target.value,
    })
    
  }
  //<input type="text" name="counterpartId" placeholder="counterpartID" value={this.state.counterpartId} onChange={this.handleInputChange}/> ;

  render(){
    const template =  this.state.selectCounterpartId.map( (item, index)=>{
      return(
        <option key={index} value={item.id}>{item.name}</option>
      )
   })
    return(  
      <form onSubmit={this.handleInputSubmit}>
        <Panel>
          <input type="text" name="value" placeholder="value" value={this.state.value} onChange={this.handleInputChange}/>
          
          <select className="form-add-transaction-modal" name="type" value={this.state.type} onChange={this.handleInputChange}>
            <option value="income">income</option>
            <option value="consumption">consumption</option>
          </select>   
          
          <input className="form-add-transaction-modal" type="date" name="date" placeholder="data" value={this.state.date} onChange={this.handleInputChange}/>
         
          <select className="form-add-transaction-modal" name="counterpartId" value={this.state.counterpartId} onChange={this.handleInputChange}>
            {template}
          </select>

        </Panel>
        <input type="submit"/>
      </form>
    )
  }
}
export default FormAdd;