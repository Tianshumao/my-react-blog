import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default function header() {
  return (
    <div className="header-wrap">
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/list">list</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/register">register</Link>
      </li>
      <li>
        <Link to="/Mapbox">Mapbox</Link>
      </li>
      <li>
        <Link to="/redux">Redux</Link>
      </li>
    </div>
  )
}
