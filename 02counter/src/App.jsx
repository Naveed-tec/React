import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 15;
  function AddValue(){
    // console.log(counter)
    //  counter = counter + 1;
    setCounter(counter + 1);
    if(counter === 20){
      setCounter(0);
    }
  }
  function RemValue(){
    // console.log(counter)
    //  counter = counter - 1;
    setCounter(counter - 1);
    if(counter === 0){
      setCounter(10);
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter is : {counter} </h2>
      <button onClick={AddValue} >Add Value</button>
      <br /><br />
      <button onClick={RemValue} >Remove Value</button>
    </>
  )
}

export default App
