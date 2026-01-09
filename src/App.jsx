import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
   /*  const [time, setTime] = useState(0)
    const x = useRef(null)

    function startTimer() {
        x.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
    }

    function stopTimer() {
        clearInterval(x.current)
        x.current = null
    }

    function resetTimer() {
        stopTimer()
        setTime(0)
    } */

  
    const [time, setTime] = useState(0)

    const x = useRef(null)

    function startTimer(){
        x.current= setInterval(() => {
            setTime(prev => prev+1)
        }, 1000);
    }

        
    function stopTimer(){
        clearInterval(x.current)
        x.current = null
    }

    function resetTimer(){
        stopTimer()
        setTime(0)

    }

    return (
        <>
            <h2>StopWatch: {time} seconds</h2>
            <div>
                <button onClick={startTimer}>Start</button>
                <br />
                <br />
                <button onClick={stopTimer}>Stop</button>
                <br />
                <br />
                <button onClick={resetTimer}>Restart</button>
            </div>
        </>
    )
}

export default App
