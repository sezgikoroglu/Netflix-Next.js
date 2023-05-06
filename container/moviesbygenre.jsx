import React from 'react'
import MoviesByGenre from '@/components/MoviesByGenre'

const MoviesByGenreContainer = ({title,movies}) => {
  return (
    <MoviesByGenre title={title} movies={movies} />
  )
}

export default MoviesByGenreContainer