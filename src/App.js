import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import PaginaInicial from './page/Home/index'
import Result from './page/Result/index'



function App() {
  return (
    <Fragment>
      <Router>
          <Switch>
            <Route exact path='/' component={PaginaInicial} />
            <Route path='/Result' component={Result} />
          </Switch>
      </Router>
      </Fragment>
  );
}

export default App;

