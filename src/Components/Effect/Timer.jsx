import React from 'react'
import { useState, useEffect } from 'react'
function Timer() {

    const [state, setState] = useState(true)

    const [countDown, setCountDown] = useState(10)

    useEffect(() => {
        const timeId = setInterval(() => { 
            setCountDown((prev) => prev - 1)
        }, 1000)

        //cleanUp function
        return () => {
          clearInterval(timeId)
        }
    }, [])


  return (
    <div>
        <button onClick={() => setState(!state)}>Click</button>
        {state && <Timer/>}
        <h2 > Count: {countDown} </h2>
    </div>
  )
}

export default Timer