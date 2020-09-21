import {Typography, Button, Menu, Row, Col } from 'antd';
import React from 'react';

export default () => {
  return(
    <Row style={{flexDirection: 'row'}}>
      <Col span={10}>
        <Typography>
          <Typography.Text>React-Page</Typography.Text>
        </Typography>
      </Col>
      <Col span={20}>
        <Menu 
          defaultSelectedKeys={['topbar-item-1']}
          mode='horizontal'
        >
          <Menu.Item key='topbar-item-1'>
            home
          </Menu.Item>
          <Menu.Item key='topbar-item-2'>
            gallery
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={18}>
        <Button type='primary'>signup</Button>
        <Button type='default'>signin</Button>
      </Col>
    </Row>
  )
}