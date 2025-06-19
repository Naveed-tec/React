import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './chai.jsx'


//{username} => this is evaluated expression means it is the final outcome 
function App() {
    const username = 'Naveed';

  return (
    <>
   <h1>Hello React | My name is {username} </h1> 
   <Chai />
   </>
  )
}

export default App
