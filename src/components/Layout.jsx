import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Drawer from './Drawer'

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else setIsMobile(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div>
      <header> {isMobile ? <Drawer /> : <NavBar />}</header>
      <Outlet />
    </div>
  )
}

export default Layout
