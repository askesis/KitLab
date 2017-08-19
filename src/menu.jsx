import React, { Component } from 'react';
import {  Link, Route } from 'react-router-dom';
import {  Button } from 'react-bootstrap';

const Menu = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}> 
      <Link to={to}> <Button bsStyle={match ? 'info' : 'default' }> {label} </Button></Link>        {/* and here they are created*/}
    </div>                                                                                            
  )}
  />
)

export default Menu;