import React, { Component } from 'react';
import {Grid, Row, Button, Col,} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class FormAdd extends Component {
  constructor(props) { //это вот состояния
	  super(props);
 
		this.state = {
      id: '',
      value:'',
      type:'',
      date:''
		};
  }

  handleInputSubmit =(e)=>{
    e.preventDefault();
    const address = `http://localhost:3004/transactions`;
    axios.post(address, this.state)

    .then(function (response) {
      alert('the id of this transactions ' + response.data.id)
    })

    .catch(function (error) {
      console.log(error);
    });
  }

  handleInputChange(e){
    
    this.setState({
      [e.target.name]:e.target.value,
    })
    console.log(this.state) 
  }

  render(){
    return(  
      <Grid>
        <Row>
          <Col md={3}>
           <Button>
              <Link to='/'>Table</Link>
           </Button>
          </Col>

          <Col md={6}>
            <form onSubmit={this.handleInputSubmit.bind(this)}>
             
              <input type="text" name="value" value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
    
              <input type="text" name="type" value={this.state.type} onChange={this.handleInputChange.bind(this)}/>
  
              <input type="text" name="date" value={this.state.date} onChange={this.handleInputChange.bind(this)}/>
           
              <input type="submit"/>
            </form>
          </Col>

          <Col md={3}>
          </Col>

        </Row>
      </Grid>
    )
  }
}
export default FormAdd;