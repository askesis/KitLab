import React, { Component } from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';

class TransactionFiltered extends Component{
 
  handleClickOne = () =>{
    this.props.handleFilterClick('one');
  }

   handleClickTwo = () =>{
    this.props.handleFilterClick('two');
  }
 
  render(){
 
  return(
  <ButtonToolbar>
    <Button onClick={this.handleClickOne} >one</Button>
    <Button onClick={this.handleClickTwo} >one</Button>
   
  </ButtonToolbar>
  )
  }
}

export default TransactionFiltered;