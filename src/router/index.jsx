import App from '../App'
import Home from '../pages/home'
import List from '../pages/list'
import Login from '../pages/login'
import Register from '../pages/register'
import Mapbox from '../pages/mapbox'
import Redux from '../pages/redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/mapbox" element={<Mapbox />}></Route>
        <Route path="/redux" element={<Redux />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
)

export default BaseRouter
