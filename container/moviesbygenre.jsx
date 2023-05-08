import React from 'react'
import MoviesByGenre from '@/components/MoviesByGenre'

const MoviesByGenreContainer = ({paramsId,movies}) => {
  return (
    <MoviesByGenre  movies={movies} paramsId={paramsId} />
  )
}

export default MoviesByGenreContainer