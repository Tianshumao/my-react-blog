import App from '../App'
import Home from '../containers/home'
import List from '../containers/list'
import Login from '../containers/login'
import Register from '../containers/register'
import Mapbox from '../containers/mapbox'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/mapbox" element={<Mapbox />}></Route>
    </Routes>
  </Router>
)

export default BaseRouter
