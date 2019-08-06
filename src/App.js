import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Questions from './containers/Questions/Questions';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/start-quiz" exact component={Questions} />
      </div>
    );
  }
}

export default App;
