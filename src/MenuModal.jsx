import React, {Component} from 'react';
import {  Button, Modal } from 'react-bootstrap';
import FormAddCounterparty from './FormAddCounterparty';
import FormAdd from './FormAdd';
class MenuModal extends Component{
  constructor(props){
    super(props);

    this.state={
      showModalCounterparty:false,
      showModalTransaction:false,
    }
  }
  
  openModalCounterparty = () =>{
    this.setState({
      showModalCounterparty:true,
    })
  }

  openModalTransaction = () =>{
    this.setState({
      showModalTransaction:true,
    })
  }

  close = () =>{
    this.setState({
      showModalCounterparty:false,
      showModalTransaction:false,
        })
  }

  render(){

    return(
      <div>
        <Button onClick={this.openModalCounterparty}>
          Add Counterparty
        </Button>
        <Button onClick={this.openModalTransaction}>
          add transaction
        </Button>

        <Modal show={this.state.showModalCounterparty} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddCounterparty/>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showModalTransaction} onHide={this.close}>
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

export default MenuModal;