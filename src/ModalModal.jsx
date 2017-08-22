import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';


class ModalModal extends Component{
  render(){
    return(
      <Modal show={this.props.showModalTransaction} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <this.props.children/>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ModalModal;