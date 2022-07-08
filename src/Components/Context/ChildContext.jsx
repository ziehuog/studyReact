import React from 'react'
import {ThemeContext} from './FatherContext'
import { useContext } from 'react'


function ChildContext() {

    const theme = useContext(ThemeContext)

  return (
    <div>
        <p className={theme}> This is paragraph to test theme</p>
    </div>
  )
}

export default ChildContext