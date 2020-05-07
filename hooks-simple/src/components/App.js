import React, {useState} from 'react';
import {
  Router,
  /* Route, */
  Switch
} from 'react-router-dom';

import history from '../history';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

  const [resource, setResource] = useState('posts');

  return (<div>
    <UserList/>
    <div>
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('todos')}>Todos</button>
    </div>
    <ResourceList resource={resource}/>

    <Router history={history}>
      <div>
        <Switch>
          {/* Routes */}
        </Switch>
      </div>
    </Router>
  </div>);
};

export default App;
