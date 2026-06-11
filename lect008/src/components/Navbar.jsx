import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink className={(e) => {return e.isActive?"blueviolet":""}} to ="/"><li>Home</li></NavLink>
          <NavLink className={(e) => {return e.isActive?"blueviolet":""}} to ="/about"><li>About</li></NavLink>
          <NavLink className={(e) => {return e.isActive?"blueviolet":""}} to ="/contact"><li>Contact Us</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
