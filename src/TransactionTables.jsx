import React, { Component } from 'react';
import TransactionFiltered from "./TransactionFilters.jsx";
  
const TransactionTables = React.createClass({ 

  render: function(){
    const template = this.props.data.map(function(item, index){
      const id = item.id,
        type = item.type,
        value = item.value,
        date = item.date; 
    return(
        <tr key={index}>
          <td>{id}</td>
          <td>{type}</td>
          <td>{value}</td>
          <td>{date}</td>
        </tr>
      )
    })
    
    return(
      
        <tr>{template}</tr>
      
    )
  }
})

export default TransactionTables;