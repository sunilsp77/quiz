import React from 'react';
import { Link } from 'react-router-dom';

const welcomeScreen = props => (
  <div>
    <h1>Welcome</h1>
    <Link
      to={{
        pathname: './start-quiz',
      }}
    >
      Start
    </Link>
  </div>
);

export default welcomeScreen;
