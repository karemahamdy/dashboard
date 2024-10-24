import React from 'react'
import Logo from './Logo'
import MainNav from './MainNav'

export default function Sidebar() {
  return (
    <div className="bg--500 p-8 pr-6 border-r border-gray-100 h-full box">
      <Logo />
      <MainNav/>
    </div>
    
  )
}
