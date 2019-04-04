import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <div>
      <Link to='/'>Steams</Link>
      <div>  
      <Link to='/'>ALL Streams</Link>
      <GoogleAuth/>
      </div>
    </div>
  )
}

export default Header;