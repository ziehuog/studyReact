import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react'


function Counter() {
    const [counter, setCounter] = useState(60)
    const timeID = useRef()
    const preCount = useRef()

    useEffect(() => {
        preCount.current = counter

    }, [counter])

    const handleStart = () => {
        timeID.current = setInterval(() => {
            setCounter(prev => prev - 1)
        }, 1000)
    }

    // const ref = useRef('Hz')

    const handleStop = () => {
        clearInterval(timeID.current)   
    }

    console.log(counter, preCount.current)

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleStart} >Start</button>
        <button onClick={handleStop} >Stop</button>
    </div>
  )
}

export default Counter