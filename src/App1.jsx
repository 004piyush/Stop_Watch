import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Case-1: when we want the value of a variable to persist across renders
/* 
  let a = 0

  useEffect(() => {
    a = a + 1
    console.log(`the current value of a is ${a}`)
  }) */
  
  /*
  On every render the value of a remains same that is one because on every render 
  the value of a is initialised to 0 
  */

  /*
    
  how to prevent i.e how to ensure that the value of a is not reinitialised to 0??

  we will use useRef hook to initialised the variable 
  useRef returns an object which has a field called current that contains the current value
  of the variable

  */

  let a = useRef(0)

  useEffect(() => {
    if(!count) return 
    a.current = a.current + 1
    console.log(`The current value of a is ${a.current}`)
  })
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
