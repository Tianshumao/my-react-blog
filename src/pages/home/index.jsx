import React from 'react'
import { Button, message } from 'antd'

export default function Home() {
  function handleClick() {
    message.success('成功啦...')
  }

  return (
    <div>
      学习搭建网站，用react + @reduxjs/toolkit + react-redux + antd +axios +
      less
      <Button type="primary" onClick={handleClick}>
        学习
      </Button>
    </div>
  )
}
