import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/hearder'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
