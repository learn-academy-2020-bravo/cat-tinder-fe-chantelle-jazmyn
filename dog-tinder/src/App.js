import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import dogs from './dogs'
import Header from './components/Header'
import DogIndex from './pages/DogIndex'

class App extends Component{

  constructor(){
    super()
    this.state = {
      allDogs:dogs
    }

  }
  render () {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" 
            render={ (props)=> <DogIndex dogs={ this.state.allDogs } /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
