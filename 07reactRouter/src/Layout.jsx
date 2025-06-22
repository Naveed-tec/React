import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    {/* The Outlet component will render the child routes */}
    <Footer />
    </>
  )
}

export default Layout