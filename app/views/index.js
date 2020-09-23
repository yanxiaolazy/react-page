import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home'; 
import News from './containers/News';
import Login from './containers/Login';
import TopBar from './components/TopBar';


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
    <Fragment>
      <TopBar/>
      <Switch>
        <Route exact path='/' component={Redirect}/>
        <Route path='/news' component={News}/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </Fragment>
  )
}

export {Routes};