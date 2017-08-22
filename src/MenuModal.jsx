import React, {Component} from 'react';
import {  Button, Modal } from 'react-bootstrap';
import FormAddCounterparty from './FormAddCounterparty';
import FormAdd from './FormAdd';
import { connect } from 'react-redux';

import * as Actions from './actions/modalMenuActions.js';


class MenuModal extends Component{

  handleShow = e =>{
      if (e.target.value == 'counterparty') { 
        this.props.setModalC(true)
      } else if (e.target.value == 'transaction'){
        this.props.setModalT(true)
      }
  } 

  close(){
    this.props.setModalC(false);
    this.props.setModalT(false);
  }

  render(){

    return(
      <div>

        <Button value="counterparty" onClick={this.handleShow.bind(this)}>
          Add Counterparty
        </Button>
        <Button value="transaction" onClick={this.handleShow.bind(this)}>
          add transaction
        </Button>

        <Modal show={this.props.showModalCounterparty} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddCounterparty/>
          </Modal.Body>
        </Modal>

        <Modal show={this.props.showModalTransaction} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAdd/>
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}

const something = connect(
   state => ({
     showModalCounterparty: state.showModalCounterparty,
     showModalTransaction: state.showModalTransaction,
    }),
    {
      setModalC: Actions.setModalC,
      setModalT: Actions.setModalT,
    } 
  )(MenuModal)

export default something;