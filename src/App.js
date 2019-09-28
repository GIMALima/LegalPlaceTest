import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signin from './components/pages/Signin'
import ToDo from './components/pages/ToDo'
import Error from './components/pages/Error'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/todo/:user_id" component={ToDo}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
