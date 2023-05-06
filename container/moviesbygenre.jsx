import React from 'react'
import MoviesByGenre from '@/components/MoviesByGenre'

const MoviesByGenreContainer = ({paramsId,title,movies}) => {
  return (
    <MoviesByGenre title={title} movies={movies} paramsId={paramsId} />
  )
}

export default MoviesByGenreContainer