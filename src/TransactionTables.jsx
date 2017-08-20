import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
  
class TransactionTables extends Component{ 
  render(){
    
      const template = this.props.finishedData.map( (item, index) => {
        const { id, type, value, date, counterpartId } = item;
        
        return(
          <tr key={index}>
            <td>{id}</td>
            <td>{type}</td>
            <td>{value}</td>
            <td>{date}</td>
            <td>{counterpartId}</td>
          </tr>
        )
      }
    )
    
  
    return(
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>type</th>
            <th>value</th>
            <th>date</th>
            <th>counterpartId</th>
          </tr>
        </thead>
        <tbody>
          {template}
        </tbody>
      </Table>
    )
  }
}

export default TransactionTables;