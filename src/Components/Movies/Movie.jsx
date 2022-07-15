import React from 'react';
import { useState } from 'react';

const Movie = (props) => {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    async function handleFetchMovies(){
        setError(null);
        try {
            let response = await fetch('https://react-http-b41ec-default-rtdb.firebaseio.com/movies.json')
            
            if(!response.ok){
                throw new Error('Sth went wrong!')
            }
            
            let data = await response.json()

            let transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    crawl: movieData.opening_crawl,
                    date: movieData.release_date

                }
            })
            setMovies(transformedMovies)
        }
        catch(error){
            setError(error.message)
            console.log('Oh no...')
        }
    
    }

    console.log(movies)
    return ( 
        <React.Fragment>
            <button onClick={handleFetchMovies}>
                fetch movie
            </button>
        </React.Fragment>
     );
}
 
export default Movie;