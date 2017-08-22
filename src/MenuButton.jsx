import React, { Component } from 'react';
import {  Link, Route } from 'react-router-dom';
import {  Button } from 'react-bootstrap';

class MenuButton extends Component{
  
  render(){
    const props = this.props;
    return(
      <Route path={props.to} exact={props.activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'active' : ''}> 
          <Link to={props.to}> 
            <Button bsStyle={match ? 'info' : 'default' }> 
              {props.label} 
            </Button>
          </Link>       
        </div>                                                                                     
      )}/>
    )
  }
}
  
export default MenuButton;