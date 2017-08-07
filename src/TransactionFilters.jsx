import React, { Component } from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';

class TransactionFiltered extends Component{

  filter = (filter) =>{
    this.props.handleFilterClick(filter);
  }
 
  render(){
    const btnConsumption = this.props.selectedFilters['consumption'] ? 'primary' : '';
    const btnIncome = this.props.selectedFilters['income'] ? 'primary' : '';
    const btnPerMonth = this.props.selectedFilters['perMonth'] ? 'primary' : '';
    const btnOver1000 = this.props.selectedFilters['over1000'] ? 'primary' : '';
  
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