import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/componente1">
          <Componente1 />
        </Route>
        <Route path="/componente2">
          <Componente2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
