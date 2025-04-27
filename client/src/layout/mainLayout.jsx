import NavBar from '@/components/ui/navBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const mainLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default mainLayout
