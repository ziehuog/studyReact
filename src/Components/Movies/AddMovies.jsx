import React from 'react'

const AddMovies = () => {

    async function addMovieHandler(movie){
        const response = await fetch('https://react-http-b41ec-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
    }
    return ( 
        <React.Fragment>
            <input type="text" />
        </React.Fragment>
     );
}
 
export default AddMovies;