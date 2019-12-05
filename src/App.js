import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'

import PaginaInicial from './page/Home/index'
import Resultado from './page/Result/index'



function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={PaginaInicial} />
            <Route path='/Result' component={Resultado} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

