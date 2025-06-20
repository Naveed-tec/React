import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  // const [count, setCount] = useState(0)
  // let newObj = {
  //   name: 'Naveed',
  //   age: 39
  // }
   //<Card Ele = {newObj}/>

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl'>Tailwind CSS</h1>
     
      <Card  username = 'Naveed' work = 'Student'/>
      <Card  username = 'Mughal' work = 'Developer'/>
        </>
  )
}

export default App
