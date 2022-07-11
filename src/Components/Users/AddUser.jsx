import React, { useRef } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import classes from './AddUser.module.css'
import { useState } from 'react';
import ErrorModal from './UI/ErrorModal';

function AddUser(props) {

        const nameInputRef = useRef();
        const ageInputRef = useRef();
    
    
    const [error, setError] = useState('');
    
    
    const handleAddUser = e => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if(enteredName.trim().length === 0 || enteredAge.trim().length ===0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }

        if(+enteredAge <= 0) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age > 0'
            })
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const handleError = () => {
        setError(null)
    }

    return (
        <div>
            
            { error && <ErrorModal 
                title = {error.title} 
                message = {error.message}
                onConfirm = {handleError}
                />}
            <Card className = {classes.input}>
                <form onSubmit = {handleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id='username' 
                        type="text" 
                        ref = {nameInputRef}
                    />

                    <label htmlFor="age">Age (years)</label>
                    <input 
                        id='age' 
                        type="number" 
                        ref = {ageInputRef}

                    />

                    <Button type='submit'>Add User</Button>
                </form>

            </Card>
        </div>
        
    );
}

export default AddUser;

//ADD IN APP.JS

// const [UsersList, SetUsersList] = useState([])

//   const handleAddUser = (uName, uAge) => {
//       SetUsersList(prevUsersList => {
//         return [...prevUsersList, {name: uName, age: uAge}]
//       })
//   }
// return (
//     <div>
//       <AddUser onAddUser = {handleAddUser}/>
//       <UserList users = {UsersList}/>
//     </div>
//   );