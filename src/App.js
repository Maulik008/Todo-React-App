import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import AddTodo from './Components/Addtodo'
import List from './Components/list'
import RegForm from './Components/RegForm'
import LoginForm from './Components/LoginForm'
import Section from './Components/Section'


const App = () => {


  return (
    <div>
      <Router>
        <Route exact path="/" component={RegForm} />

        <Route path="/log" component={LoginForm} />
        <Route path="/Home" component={AddTodo} />
      </Router>




    </div>
  )
}

export default App;