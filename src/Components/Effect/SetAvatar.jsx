import React from 'react'
import { useEffect, useState } from 'react'

function SetAvatar() {

    const [avt, setAvt] = useState()
    const handleAvt = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvt(file)
    }

    useEffect(() => {
        return () => {
            avt && URL.revokeObjectURL(avt.preview)
        }
    }, [avt])

  return (
    <div>
        <h1>Set avatar</h1>
        <input 
            type="file" 
            onChange={handleAvt}
        />
        {avt && (
            <img src={avt.preview} alt=""  width = "80%"/>
        )}
    </div>
  )
}

export default SetAvatar