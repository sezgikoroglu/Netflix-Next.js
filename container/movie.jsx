import Movie from '@/components/Movie'
import React from 'react'

const MovieContainer = ({movieDetail}) => {
  return (
    <Movie movieDetail={movieDetail}/>
  )
}

export default MovieContainer