import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Hello webpack</h1>
      <p>经过几天瞎折腾，终于还是让我胡乱的配置了个胡乱的脚手架</p>
      <p>不过还没有配置静态资源加载loader， 也没有测过路由是不是我想要的</p>
      <p>果然是万事开头难</p>
      <p><strong>加油，你是全村的失望</strong></p>
      <br/>
      <p>click this button {count} !</p>
      <button onClick={() => setCount(c => c + 1)} >click me</button>
      <Link to='/news'>news page</Link>
    </div>
  );
}

