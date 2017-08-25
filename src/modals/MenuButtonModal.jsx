import React, {Component} from 'react';
import {  Button } from 'react-bootstrap';
import FormAddCounterparty from '../FormAddCounterparty';
import FormAdd from '../FormAdd';
import { connect } from 'react-redux';

import * as Actions from '../actions/modalMenuActions.js';

import CustomModal from './CustomModal';

class MenuButtonModal extends Component{

  handleShow = e =>{
     this.props.openModal(e.target.value);
  } 

  render(){
    return(
      <div>
        <Button value="addTransaction" onClick={this.handleShow.bind(this)}>
          Add Counterparty
        </Button>
        <Button value="addCounterparty" onClick={this.handleShow.bind(this)}>
          Add transaction
        </Button>

        <CustomModal name="addTransaction"> <FormAddCounterparty/> </CustomModal>
        <CustomModal name="addCounterparty"> <FormAdd/> </CustomModal>
      </div>
    )
  }
}

const something = connect(
 null,
    {
      openModal: Actions.openModal,
    } 
  )(MenuButtonModal)

export default something