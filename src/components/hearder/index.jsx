import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/list">list</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/register">register</Link>
      <br />
      <Link to="/mapbox">Mapbox</Link>
    </div>
  )
}
