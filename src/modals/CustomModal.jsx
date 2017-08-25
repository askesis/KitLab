import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as Actions from '../actions/modalMenuActions.js';

class CustomModal extends Component{

  close = () =>{
    this.props.closeModal(this.props.name);
  }

  render(){
    const name = this.props.name;   
    return(
     <Modal show={this.props.store[name]} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Заполните поля, пожалста!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
      </Modal>
    )
  }
}

const some = connect(
  state => ({
     store : state,
    }),
    {
      closeModal: Actions.closeModal,
    }
)(CustomModal)

export default some;