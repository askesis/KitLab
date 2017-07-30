import React, { Component } from 'react';
import TransactionTables from "./TransactionTables.jsx";
import { Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';

const TransactionFiltered = React.createClass({
  render: function(){
    return(
    <ButtonToolbar>
    <Button>one</Button>
        <Button>two</Button>
      </ButtonToolbar>
      
    )
  }
})

export default TransactionFiltered;