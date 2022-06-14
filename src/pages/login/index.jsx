import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import './index.less'
import { LoginApi } from '../../api/api'

export default function Login() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    LoginApi({
      username: values.username,
      password: values.password,
    }).then((res) => {
      if (res.errCode === 0) {
        message.success(res.message)
        localStorage.setItem('avatar', res.data.avatar)
        localStorage.setItem('cms-token', res.data['cms-token'])
        localStorage.setItem('editable', res.data.editable)
        localStorage.setItem('player', res.data.player)
        localStorage.setItem('username', res.data.username)
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        message.error(res.message)
      }
    })
  }

  return (
    <div className="login">
      <div className="login-box">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Link to="/">返回首页</Link>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
                min: 4,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>{' '}
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
