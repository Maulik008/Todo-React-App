import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import RegForm from './Components/RegForm'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'


const App = () => {


  return (
    <div>
      <Router>
        <Route exact path="/" component={RegForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  )
}

export default App;