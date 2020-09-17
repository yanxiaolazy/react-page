import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes';

function App() {
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

ReactDOM.hydrate(
  <App/>,
  document.getElementById('root')
);
