import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';
import AddTodo from './Components/Addtodo'
import RegForm from './Components/RegForm'
import LoginForm from './Components/LoginForm'
import Error from './Components/Error'
import Todonavbar from './Components/Navbar'



const App = () => {


  return (
    <div>
      <Todonavbar search={true} />

      <Router>
        <Switch>
          <Route exact path="/" component={RegForm} />

          <Route exact path="/log" component={LoginForm} />
          <Route exact path="/Home" component={AddTodo} />
          <Route path="/Error" component={Error} />
          <Route component={Error} />
        </Switch>
      </Router>




    </div>
  )
}

export default App;