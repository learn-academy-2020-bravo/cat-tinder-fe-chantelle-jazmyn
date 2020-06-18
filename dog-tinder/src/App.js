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
import NewDog from './pages/NewDog'
import {Container} from 'reactstrap'


const App = () => {
  const [allDogs, setDogs] = useState(dogs)
    return (
      <Router>
        <Header/>
        <Container>
        <Switch>
          <Route exact path="/"
            render={ () => <DogIndex doggos={ allDogs } /> } />
          <Route exact path ="/newdog"
            render={ () => <NewDog/>}/>
        </Switch>
        </Container>
      </Router>
    )
  }

export default App;
