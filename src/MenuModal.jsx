import React, {Component} from 'react';
import {  Button, Modal } from 'react-bootstrap';
import FormAddCounterparty from './FormAddCounterparty';
import FormAdd from './FormAdd';
import { connect } from 'react-redux';

import * as Actions from './actions/modalMenuActions.js';


class MenuModal extends Component{
  // constructor(props){
  //   super(props);

  //   this.state={
  //     showModalCounterparty:false,
  //     showModalTransaction:false,
  //   }
  // }
  
  // openModalCounterparty = () =>{
  //   this.setState({
  //     showModalCounterparty:true,
  //   })
  // }

  // openModalTransaction = () =>{
  //   this.setState({
  //     showModalTransaction:true,
  //   })
  // }

  // close = () =>{
  //   this.setState({
  //     showModalCounterparty:false,
  //     showModalTransaction:false,
  //       })
  // }

    handleShowC(){
      console.log('1');
      this.props.setModalC(true);
    }

    handleShowT(){
      console.log('1/2');
      this.props.setModalT(true);
    }

    close(){
      this.props.setModalC(false);
      this.props.setModalT(false);
    }
  
  render(){

    return(
      <div>
        <Button onClick={this.handleShowC.bind(this)}>
          Add Counterparty
        </Button>
        <Button onClick={this.handleShowT.bind(this)}>
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

// function mapStateToProps(state){
//   console.log('2');
//   return{
//     data:state
//   }
// }

// function mapDispatchToProps(dispatch) {
//   console.log('3');
//   return {
//    onClick: () => {
//      dispatch(Actions.setModalC(true))
//    }
//   }
// }

// function mapDispatchToProps(dispatch) {
//   console.log('3');
//   return {
//     pageActions: bindActionCreators(Actions, dispatch)
//   }
// }

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

// const something = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(MenuModal)

export default something;