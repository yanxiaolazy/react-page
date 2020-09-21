import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home'; 
import News from './containers/News';
import Login from './containers/Login';


function Redirect(props) {
  const {history, match} = props;

  useEffect(() => {
    if (match.url === '/') {
      history.push('/login')
    }
  }, []);
  return(null);
}

function Routes() {
  return(
    <>
      <Route exact path='/' component={Redirect}/>
      <Route path='/news' component={News}/>
      <Route path='/login' component={Login}/>
      <Route path='/home' component={Home}/>
    </>
  )
}

export {Routes};