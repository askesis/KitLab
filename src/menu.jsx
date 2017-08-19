import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';


class Menu extends Component{
  constructor(props){
    super(props);

    this.state = {
      activeBtn:{},
    }
  }

  handleBtnMenuActivity = btn =>{
  //   this.setState({
  //     activeBtn: {...this.state.activeBtn, [btn]:btn }
  //   })
   }

  render(){
{/*
    const btnMenuAdd = this.state.activeBtn['add'] ? 'primary' : 'default';bsStyle={btnMenuAdd}
    const btnMenuTable = this.state.activeBtn['table'] ? 'primary' : 'default';
    return(
      <Panel>
        <NavLink to='/form_add'><Button activeClassName="selected" onClick={ () => this.handleBtnMenuActivity('add') }  > add transaction </Button></NavLink>
        <NavLink to='/'><Button activeClassName="selected" onClick={ () => this.handleBtnMenuActivity('table') } > table </Button></NavLink>
      </Panel>
    )*/}

    return(
      <Panel>
       <NavLink to='/form_add' activeClassName="selected"> add transaction </NavLink>
        <NavLink to='/' activeClassName="selected"> table </NavLink>
      </Panel>
    )

  }
}

export default Menu;