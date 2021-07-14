import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import RegForm from './containers/registration/RegForm'
import LoginForm from './containers/login/LoginForm'
import Home from './containers/home/Home'


const App = () => {


  return (
    <div>
      <Router>
        <Route exact path="/" component={RegForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  )
}

export default App;