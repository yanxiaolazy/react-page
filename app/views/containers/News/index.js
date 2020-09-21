import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './news.css';
import pic from '../../static/img/pic.jpg'
import axios from 'axios';

export default () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    getConfig('/config').then(datas => setData(datas));
  }, []);

  
  if (data === null) {
    return(null);
  }
  
  const {user, zhiye} = data;

  return(
    <>
      <h1 className='news-h1'>News Page</h1>
      <p><Link to='/'>home page</Link></p>
      <div><img width='300px' src={pic} /></div>
      <br/>
      <table border='1' cellSpacing='0'>
        <thead>
          <tr>
            <th>company name</th>
            <th>Business scope</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan='2'>{user.company}</td>
            <td>{zhiye.dianzi}</td>
          </tr>
          <tr>
            <td>{zhiye.others}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

async function getConfig(url) {
  let datas;
  await axios.get(`http://localhost:3000${url}`)
  .then(res => {if (res.status === 200) {
    datas = res;
  }})
  .catch(err => console.error(err));

  return datas.data;
}