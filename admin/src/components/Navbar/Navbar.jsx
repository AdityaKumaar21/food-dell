import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.Preview} alt="X" />
      <img className='profile' src={assets.profile_image} alt="X" />
    </div>
  )
}

export default Navbar
