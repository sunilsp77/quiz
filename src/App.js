import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Questions from './containers/Questions/Questions';

class App extends Component {
  startQuiz = () => {
    this.props.history.push('/checkout');
  };
  render() {
    return (
      <div>
        <Route path="/start-quiz" exact component={Questions} />
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <h1>Welcome</h1>
              <Link
                to={{
                  pathname: './start-quiz',
                  hash: '#submit',
                  search: '?quick-submit=true',
                }}
              >
                Start
              </Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
