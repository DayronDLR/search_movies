import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';

import { Home } from './pages/Home';
import { DetailMovie } from './pages/DetailMovie';
import { NotFound } from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={DetailMovie}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;