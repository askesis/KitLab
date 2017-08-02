import React, { Component } from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';

class TransactionFiltered extends Component{

  filter = (filter) =>{
    this.props.handleFilterClick(filter);
  }
 
  render(){
 
  return(
  <ButtonToolbar>
    <Button onClick={() => this.filter('asc')} >one</Button>
    <Button onClick={() => this.filter('desc')} >two</Button>
    <Button onClick={() => this.filter('over1000')} > three </Button>
  </ButtonToolbar>
  )
  }
}

export default TransactionFiltered;