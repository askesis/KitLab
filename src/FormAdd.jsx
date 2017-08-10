import React, { Component } from 'react';
import {Grid, Row, Button, Col, FormControl, ControlLabel, HelpBlock, FormGroup, Radio} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class FormAdd extends Component {
  constructor(props) { //это вот состояния
	  super(props);

		this.state = {
			value: '',
		};
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
      this.setState({
        value: e.target.value 
      });
  }

  render(){

    return(
      <Grid>
        <Row>
          <Col md={3}>
            <Link to='/'>App </Link>
          </Col>

          <Col md={6}>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>something</ControlLabel>

                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter value"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                <p></p>
                <FormControl
                  type="text"
                  
                  placeholder="Enter text"
                  
                />
                </FormGroup>

                <FormGroup>
                <p></p>
                <Radio name="radioGroup" inline>
                  consumption
                </Radio>
          
                <Radio name="radioGroup" inline>
                  income
                </Radio>
                </FormGroup>
                
                <HelpBlock>something</HelpBlock>
             
            </form>
          </Col>

          <Col md={3}>
            <Button>
              send
            </Button>
          </Col>

        </Row>
      </Grid>
    )

  }
}
export default FormAdd;