import React from 'react'
import { fetchMoviesByGenre } from '@/utils/requests'
import Row from '@/components/Row';

async function MoviesByGenre({ params, searchParams }) {
    
    const movies = await fetchMoviesByGenre(params.id);
    
    return(
        
        <Row title={"cat}"} movies={movies} />
    )
}

export default MoviesByGenre