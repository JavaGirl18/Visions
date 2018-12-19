import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from './Components/HomePage'
import User from './Components/UserPage'

class App extends Component {
  render() {



    const UserPage = (props) => {
      return(
        <User {...props} />
      )
    }
    const HomePage = (props) => {
      return (
        <Home {...props} />
      )
    }



    return (
      <Router>
      <div>
        <Switch>
          <Route exact path ='/' render={HomePage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
