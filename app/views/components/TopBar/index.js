import {Typography, Button, Menu, Row, Col } from 'antd';
import React from 'react';
import './index.scss';

export default () => {
  return(
    <div className='topbar'>
      <div className='topbar-item'>
        <Typography className='topbar-typography'>
          <Typography.Text>React-Page</Typography.Text>
        </Typography>
      </div>
      <div className='topbar-item'>
        <Menu 
          defaultSelectedKeys={['topbar-item-1']}
          mode='horizontal'
          className='topbar-menu'
        >
          <Menu.Item key='topbar-item-1'>
            home
          </Menu.Item>
          <Menu.Item key='topbar-item-2'>
            gallery
          </Menu.Item>
        </Menu>
      </div>
      <div className='topbar-item topbar-btns'>
        <Button type='primary'>signup</Button>
        <Button type='default'>signin</Button>
      </div>
    </div>
  )
}