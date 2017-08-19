import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';


class Menu extends Component{

  render(){
    return(
      <Panel>
        <NavLink to='/form_add'><Button > add transaction </Button></NavLink>
        <NavLink to='/'><Button > table </Button></NavLink>
      </Panel>
    )
  }
}

export default Menu;