import React, { Component } from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap'
import axios from 'axios';
import {counterpartyAddress} from './config';

class CounterpartyTables extends Component{ 
  constructor(props) {
      super(props);

      this.state = {
        initialData:[]
      };
    }

  componentDidMount() {
    axios.get(counterpartyAddress)
      .then( response => {
        const data = response.data.map( (item, index) => {
          return item
        })
        this.setState({
          initialData: data
        }) 
      })
      .catch( error => {
        console.log(error);
      });
    
  }

  render(){ 
    const template = this.state.initialData.map( (item, index) => {
      const { id, name } = item;
      return(
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
        </tr>
      )
    })
    return(
      <Grid>
        <Row>
          <Col xsHidden md={2} ></Col>
          <Col md={8}> 
            <Table striped>
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {template}
              </tbody>
            </Table>
          </Col>
          <Col xsHidden md={2} ></Col>
        </Row>
      </Grid>
    )
  }
}

export default CounterpartyTables;


     