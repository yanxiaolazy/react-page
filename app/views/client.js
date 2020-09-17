import React from 'react';
import ReactDOM from 'react-dom';
import {Client} from './index';

ReactDOM.hydrate(
  // <React.Fragment>
    <Client />,
  // </React.Fragment>,
  document.getElementById('root')
);
