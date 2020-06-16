import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import dogs from './dogs'
import Header from './components/Header'
import DogIndex from './pages/DogIndex'

const App = () => {
  const [allDogs, setDogs] = useState(dogs)
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"
            render={ (props) => <DogIndex dogs={ allDogs } /> } />
        </Switch>
      </Router>
    )
  }

export default App;
