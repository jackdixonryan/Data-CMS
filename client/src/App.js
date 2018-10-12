import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';
import Create from './pages/create/create';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/create" component={Create}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
