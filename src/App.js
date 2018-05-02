import React, { Component } from 'react';
import logo from './logo.svg';
import restologo from './resto.svg'
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Resto from './components/Resto'
import About from './components/About'
import Login from './components/Login'
import DetailPage from './components/DetailPage'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      message: 'Foodies'
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={restologo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message}</h1>
        </header>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Switch>
        <Route exact path="/" component={Resto}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/detail/:id" component={DetailPage}/>
        <Route path="*" 
        render = {() => (
          <h1>Page does not exist!</h1>
        )}
        />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
