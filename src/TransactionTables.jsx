import React, { Component } from 'react';

  
class TransactionTables extends Component{ 
 render(){
  const template = this.props.finishedData.map( (item, index) => {
  if (item){
    // const id = item.id,
    //   type = item.type,
    //   value = item.value,
    //   date = item.date; 
    const { id, type, value, date } = item;
    return(
      <tr key={index}>
        <td>{id}</td>
        <td>{type}</td>
        <td>{value}</td>
        <td>{date}</td>
      </tr>
    )
  }
  })
  
    return(
      <table>
        <tbody>
        {template}
        </tbody>
      </table>
    )
  }
}

export default TransactionTables;