import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

const MainLayout = (props) => {
  return (
    <div className='main-layout'>
      <SideBar/>
      <NavBar/>
      {props.children}
     
    </div>
  )
}

export default MainLayout
