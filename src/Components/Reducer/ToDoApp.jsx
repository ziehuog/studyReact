import React from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'

function ToDoApp() {

    const inputRef = useRef()
    
    //init state
    const initState = {
        job: '',
        jobs: []
    }

    //action

    const SET_JOB = 'set_job'
    const ADD_JOB = 'add_job'
    const DELETE_JOB = 'delete_job'


    const setJob = payLoad => {
        return {
            type: SET_JOB,
            payLoad
        }
    }
    const addJob = payLoad => {
        return {
            type: ADD_JOB,
            payLoad
        }
    }
    const deleteJob = payLoad => {
        return {
            type: DELETE_JOB,
            payLoad
        }
    }

    //reducer
    
    const reducer = (state, action) => {
        console.log(action)
        let newState
        
        switch(action.type){
            case SET_JOB: 
                newState = {
                    ...state,
                    job: action.payLoad
                }
                break
            case ADD_JOB:
                newState = {
                    ...state,
                    job: [...state.jobs, action.payLoad]
                }
                break
                case DELETE_JOB:

                    const newJobs = [...state, jobs]

                    newJobs.splice(action.payLoad, 1)

                    newState = {
                        ...state,
                        job: [...state.jobs, action.payLoad]
                    }
                    break
            default:
                throw new Error('No no no')
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)

     const {job, jobs} = state

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    
  return (
    <div>
        <h1>To Do List</h1>
        <input 
            ref = {inputRef}
            type="text"
            value={job}
            onChange = {e => {
                dispatch(setJob(e.target.value))
            }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
            {jobs.map((job, index) => (
                <li key={index}>
                    {job}
                    <span onClick={() => dispatch(deleteJob(index))}> X </span>
                </li>

            ))}
        </ul>

    </div>
  )
}

export default ToDoApp