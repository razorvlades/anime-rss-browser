import React from 'react';
import { Home } from './Pages/Home';
import { Show } from './Pages/Show';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path={`/series/:title`} component={Show} />
        </Switch>
    </Router>
  );
}

export default App;
