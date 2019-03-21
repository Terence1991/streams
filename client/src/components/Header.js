import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to='/'>Steams</Link>
      <div>  
      <Link to='/'>ALL Streams</Link>
      </div>
    </div>
  )
}

export default Header;