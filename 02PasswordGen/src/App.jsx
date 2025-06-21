import { useState, useCallback, useRef} from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [charAllo, setCharAllo] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) str += "0123456789";
    if(charAllo) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); 
    }
    setPassword(pass);
  } , [length, number, charAllo, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charAllo, passwordGenerator])

  const passRef = useRef(null);
  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder="Password"
        readOnly
        ref={passRef}
        />
        <button 
         onClick={copyToClipboard}
        className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0'>Copy</button>
      
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {number}
          id='numberInput'
          onChange={() => {setnumber( (prev) => !prev)}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {charAllo}
          id='charInput'
          onChange={() => {setCharAllo( (prev) => !prev)}}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
