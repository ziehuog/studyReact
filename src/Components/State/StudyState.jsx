import React from 'react'
import { useState } from 'react'

function StudyState() {

//COUNTER
    const [count, setCount] = useState(1);

    function handleCounter(){
        return (
            setCount( count + 1)
        )
    }

//ADD ELEMENT
    const [state, setInfo] = useState({
        name: 'Ellie',
        age: 20,
    }) 

    function handleInfo(){
        return (    
            setInfo({
                ...state,
                color: 'Blue',
            })
        )
    }
    
//RANDOM GIFT

const gifts = ["Flowers", "Coins", "Vouchers", "Good Luck"]

const [currentGift, setGift] = useState("Click to choose your gift")

function handleGift(){

    const index = Math.floor(Math.random() * gifts.length)

    return (
        setGift(gifts[index])
    )
}

//FORM CHECK 

let courses = [
    {
        id: 1,
        name: 'JS'
    }, 
    {
        id: 2,
        name: 'React'
    },
    {   
        id: 3,
        name: 'Vue'
    },
];

const [checked, setChecked] = useState([])

// console.log(checked);

const handleCheck = (id) => {
    setChecked(prev => {
        
        const isChecked = checked.includes(id)

        if(isChecked){
            return checked.filter(item => item !==id)
        } else{
            return [... prev, id]
        }
    })
}

const handleSubmit = () => {
    console.log({ids: checked});
}

// const checkAll = () => {
//     courses.map(function( ){

//     })
    
// }

// TO DO LIST

const storageJobs = JSON.parse(localStorage.getItem('jobs'))
console.log(storageJobs)

const [job, setJob] = useState('')
const [jobs, setJobs] = useState(storageJobs ?? [])


const handleAdd = () => {
    setJobs(prev => {
        const newJobs = [...prev, job]


        const jsonJobs = JSON.stringify(newJobs)
        console.log(jsonJobs)

        localStorage.setItem('jobs', jsonJobs)

        return newJobs
    })
    setJob('')
}

const handleDelete = () => {
    setJobs(
        jobs.pop()
    )
}


  return (
    <div style={{padding: 30}}>

{/* COUNTER */}
        <div>
            <h1>study State</h1>
            <h3>{count}</h3>
            <button onClick={handleCounter}> click</button>
        </div>

{/* ADD ELEMS */}
        <div>
            <h1> Add element</h1>
            <h3>{JSON.stringify(state)}</h3>
            <button onClick={handleInfo}> Update</button>
        </div>
        <div>
            <h1> Random Gifts</h1>
            <h3>{currentGift}</h3>
            <button onClick={handleGift}> Update</button>
        </div>
        <div>
            <h1> Check Box</h1>
            {courses.map(course => (
                <div key={course.id}> 
                    <input 
                    type ="checkbox"
                    checked = {checked.includes(course.id)}
                    onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <div>
            <input 
            type="checkbox"
            checked = {checked.includes()}
            /> All
            </div>
            <button onClick={handleSubmit}> Update</button>
        </div>


        <div>
            <h1> To do list</h1>
            <input 
            // type="text"
            value={job}
            onChange = {e => setJob(e.target.value)}
            />
            
            <button onClick={handleAdd}> Add</button>
            <button onClick={handleDelete}> Delete</button>

            <ul>
                {jobs.map(function(job, index){
                    return(
                        <li key={index}> {job} </li>
                        )
                    
                })}
            </ul>
        </div>
    </div>
  )
}

export default StudyState