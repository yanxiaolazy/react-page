import React from 'react';
import { Link } from 'react-router-dom';
import './news.css';
import pic from '../../static/img/pic.jpg'

export default () => {
  return(
    <>
      <h1 className='news-h1'>News Page</h1>
      <p><Link to='/'>home page</Link></p>
      <div><img width='300px' src={pic} /></div>
    </>
  )
}