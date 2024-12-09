import React from 'react'
import DasktopNavbar from './DesktopNavbar/DesktopNavbar'
import MobileNavbar from './MobileNavbar/MobileNavbar'

const Navbar = () => {
  return (
    <div>
        <DasktopNavbar/>
        <MobileNavbar/>
    </div>
  )
}

export default Navbar