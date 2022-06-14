import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import './index.less'
import { RegisterApi } from '../../api/api'

export default function Register() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    RegisterApi({
      username: values.username,
      password: values.password,
    }).then((res) => {
      if (res.errCode === 0) {
        message.success(res.message)
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
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  )
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              register
            </Button>{' '}
            Or <Link to="/login">login</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
