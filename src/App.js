import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Input ,Output} from './components';
import {queryString} from 'query-string';

class App extends Component {
  constructor(){
    super();
    
  }
  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <ul>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </ul>
          <ul>
            <NavLink to="/Home2" activeClassName="active">Home2</NavLink>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
              <Route path="/" component={Input} exact={true} />
              <Route path="/Home2" component={Output} exact={true} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
