import React from 'react'
import { Outlet } from 'react-router-dom'
// import { ConfigProvider, DatePicker, message, Alert } from 'antd'
import Header from './components/hearder'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
