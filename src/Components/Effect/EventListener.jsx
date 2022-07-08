import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function EventListener() {
    const [showButton, setShowButton] = useState(true)

    useEffect( () => {
        const handleScroll = () => {
            if (window.scrollY >= 200){
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        console.log('add')
        //cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('remove')
        }
    }, [])


  return (
    <div>
        {
    showButton && (
        <button 
        style={{
            position: 'fixed',
            left: 20,
            top: 20,
        }}
        >
            Try
        </button>
    )
}
    </div>
  )
}

export default EventListener