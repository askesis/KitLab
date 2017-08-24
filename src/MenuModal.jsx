import React, {Component} from 'react';
import {  Button } from 'react-bootstrap';
import FormAddCounterparty from './FormAddCounterparty';
import FormAdd from './FormAdd';
import { connect } from 'react-redux';

import * as Actions from './actions/modalMenuActions.js';
import ModalModal from './ModalModal';

class MenuModal extends Component{

  handleShow = e =>{
      if (e.target.value === 'counterparty') { 
        this.props.setModalC(true)
      } else if (e.target.value === 'transaction'){
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

        <ModalModal showModalTransaction={this.props.showModalTransaction} close={this.close.bind(this)}>{FormAdd}</ModalModal>
        <ModalModal showModalTransaction={this.props.showModalCounterparty} close={this.close.bind(this)}>{FormAddCounterparty}</ModalModal>
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