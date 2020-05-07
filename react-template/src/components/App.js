import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import Home from './Home';

const App = () => {
  return (<div>
    <Router history={history}>
      <div>
        App Navigation Bar
        <Switch>
        {/* Routes */}
        <Route path="/" exact={true} component={Home}/>
        </Switch>
      </div>
    </Router>
  </div>);
};

export default App;
