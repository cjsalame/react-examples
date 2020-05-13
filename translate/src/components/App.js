import React from 'react';
import {
  Router,
  /* Route, */
  Switch
} from 'react-router-dom';

import history from '../history';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  /* Initialize State object */
  state = {
    language: 'english'
  }

  // Update Language
  onLanguageChange = language => {
    this.setState({language});
  }

  render() {
    return (<div className="ui conatiner">
      <LanguageSelector onLanguageChange={this.onLanguageChange}/>

      <ColorContext.Provider value="red">
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>
      </ColorContext.Provider>

      <Router history={history}>
        <div>
          <Switch>
            {/* Routes */}
          </Switch>
        </div>
      </Router>
    </div>);
  }
};

export default App;
