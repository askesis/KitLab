import React, { Component } from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';

class TransactionFiltered extends Component{

  filter = filter =>{
    this.props.handleFilterClick(filter);
  }
 
  render(){
    const { selectedFilters } = this.props;
    const btnConsumption = selectedFilters['consumption'] ? 'info' : 'default';
    const btnIncome = selectedFilters['income'] ? 'info' : 'default';
    const btnPerMonth = selectedFilters['perMonth'] ? 'info' : 'default';
    const btnOver1000 = selectedFilters['over1000'] ? 'info' : 'default';
  
    return(
      <ButtonToolbar>
        
        <Button 
          onClick={ () => this.filter('consumption') }
          bsStyle={btnConsumption}>
          consumption
        </Button>
        
        <Button 
          onClick={ () => this.filter('income') }
          bsStyle={btnIncome}>
          income
        </Button>
        
        <Button 
          onClick={ () => this.filter('over1000') }
          bsStyle={btnOver1000}> 
          over 1000 
        </Button>

        <Button 
          onClick={ () => this.filter('perMonth') }
          bsStyle={btnPerMonth}> 
          per month
        </Button>
      
      </ButtonToolbar>
    )
  }
}

export default TransactionFiltered;