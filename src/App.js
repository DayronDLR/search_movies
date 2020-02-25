import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';

import { Home } from './pages/Home';
import { DetailMovie } from './pages/DetailMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detail/:id" component={DetailMovie}/>
        </Switch>
      </div>
    );
  }
}

export default App;