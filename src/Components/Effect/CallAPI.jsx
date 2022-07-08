import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const tabs = ['posts', 'users', 'albums']

function CallAPI() {

    const [title, setTitle] = useState('')

    const [users, setUser] = useState([])
    const [type, setType] = useState('users')

    useEffect(() => {
        // document.title = title //side effect
          
        // async function f(){
        //     let response = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
        //     let fUser = await response.json()
        //     setUser(fUser)
        // }
        // f() 
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(users => setUser(users))
    }, [type])

  return (
    <div>
        <input 
            type="text" 
            value={title}
            onChange = {e => setTitle(e.target.value)}
        />
        {tabs.map( (tab) => (
            <button 
                key={tab}
                onClick = {() => setType(tab)}
            >
                {tab}
            </button>
        ))
        } 
        
        <ul>
            {users.map(user =>
                (<li key={user.id}> {user.name || user.title} </li> )
            )}
        </ul>

    </div>
  )
}

export default CallAPI