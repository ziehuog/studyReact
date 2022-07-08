import React from 'react'
import { createContext, useState } from 'react'
import ChildContext from './ChildContext'

export const ThemeContext = createContext()

function FatherContext() {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <ChildContext/>
    </div>
    </ThemeContext.Provider>
  )
}

export default FatherContext