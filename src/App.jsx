import React, { Component } from 'react';
import { BrowserRouter,  Route } from 'react-router-dom'
import './App.css';
import TablePlusFilters from './TablePlusFilters';
import FormAdd from './FormAdd';
import { Panel, ButtonToolbar } from 'react-bootstrap';
import Menu from './Menu';
import CounterpartyTables from './Counterparty';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
            <ButtonToolbar>
              <Panel className={"Menu"}>
                <Menu activeOnlyWhenExact={true} to="/" label="TablePlusFilters"/>
                <Menu to="/form_add" label="FormAdd"/>
                <Menu to="/counterparty" label="Counterparty"/>
              </Panel>
            </ButtonToolbar>                                            {/* button show here*/}

          <Route exact path="/" component={TablePlusFilters}/>
          <Route path="/form_add" component={FormAdd}/>
          <Route path="/counterparty" component={CounterpartyTables}/>
        </div>
      </BrowserRouter>
    )
  }
 
}

export default App;