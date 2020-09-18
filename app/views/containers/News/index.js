import React from 'react';
import { Link } from 'react-router-dom';
import './news.css';

export default () => {
  return(
    <>
      <h1 className='news-h1'>News Page</h1>
      <Link to='/'>home page</Link>
    </>
  )
}