import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home'; 
import News from './containers/News';

function Routes() {
  return(
    <>
      <Route exact path='/' component={Home}/>
      <Route path='/news' component={News}/>
    </>
  )
}

export {Routes};