import React from 'react';
import {Typography, Row, Col, Form, Input, Button} from 'antd';
import {withRouter} from 'react-router-dom';

export default withRouter((props) => {
  const {Title} = Typography;
  const {Item} = Form;
  const {Password} = Input;

  const {history} = props;

  function postForm(values) {
    //提交数据到数据库或者验证用户
    console.log(values)
    history.push('/home');
  }

  function onFinishFailed(err) {
    console.log('err: ', err);
  }
  return(
    <>
      <Row align='middle' justify='center' style={{height: '100vh'}}>
        <Col>
          <Typography>
            <Title level={4}>Login</Title>
            <Form layout="vertical" onFinish={postForm} onFinishFailed={onFinishFailed}>
              <Item 
              label='username' 
              name='username' 
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                }
              ]}>
                <Input/>
              </Item>
              <Item
                label='password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  }
                ]}
              >
                <Password/>
              </Item>
              <Item>
                <Button type='primary' htmlType='submit'>提交</Button>
              </Item>
            </Form>
          </Typography>
        </Col>
      </Row>
    </>
  )
});