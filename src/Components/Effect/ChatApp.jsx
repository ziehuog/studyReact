import React from 'react'
import { useEffect, useState } from 'react'

const users = [
    {id: 1, name: 'Ellie'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Hannah'},

]
function ChatApp() {

const [userId, setUserId] = useState()

useEffect(() =>{
    const handleComment = ({detail}) => {
        console.log(detail)
    }

    window.addEventListener(`user-${userId}`, handleComment)

    return () => {
        window.removeEventListener(`user-${userId}`, handleComment)
    }
}, [userId])

  return (

    <div>
        {users.map(user => (
            <div
                key={user.id}
                style = {{
                    color: userId ===user.id ? "red" : "#333"
                }}
                onClick = {() => setUserId(user.id)}
            > 
                {user.name}
            </div>
        ))}
    </div>
  )
}

export default ChatApp