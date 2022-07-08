import React from 'react'
import { memo} from 'react'


function CallBack({onIncrease}) {

    console.log('re-render')
  return (
    <div> 
        <h2> Study UseCallBack</h2>
        <button onClick={onIncrease}> Click me!</button>
    </div>
  )
}

export default memo(CallBack)


//ADD IN FILE APP.JS

// const [count, setCount] = useState(0)

//     const handleIncrease = useCallback(() => {
//       setCount(prevCount => prevCount + 1 )
//     }, []) 

//     return (
//         <div>
//           <CallBack onIncrease={handleIncrease}/>
//           <h1>{count}</h1>
//         </div>
//       );
