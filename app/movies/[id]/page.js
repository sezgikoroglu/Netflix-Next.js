import React from 'react'
import { fetchMoviesByGenre } from '@/utils/requests'
import MoviesByGenreContainer from '@/container/moviesbygenre';

async function MoviesByGenre({ params, searchParams }) {
    
    const movies = await fetchMoviesByGenre(params.id);
    
    return(
        
        < MoviesByGenreContainer title={"Category"} movies={movies} paramsId={params.id}  />
    )
}

export default MoviesByGenre