import React from 'react'
import Image from 'next/image'
import { baseUrl } from '@/constants/movie'


const Movie = ({movieDetail}) => {

  return (

    <div className='flex space-x-10  lg:h-[65vh] mt-20 p-12 items-center'>
        <div className='w-3/6 h-full relative object-cover rounded-sm  md:rounded'>
        <Image   
            src={`https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
            fill
            alt='img'
            sizes=''
            
         />
        </div>
            
        <div className='w-3/6 flex-col space-y-4'>
            <h2 className="capitalize text-2xl font-bold md:text-3xl lg:text-5xl ">{movieDetail?.title}</h2>
            <div className='flex-col space-y-4'>
                <h5 className='uppercase font-bold'>Overview</h5>
                <p className='text-slate-300'>{movieDetail?.overview}</p>
            </div>
            <div>
                <span className="text-[gray]">Genres:</span>{' '}
                {movieDetail.genres.map((genre) => genre.name).join(', ')}
            </div>
            <div>
                <span className="text-[gray] capitalize">Production Companies:</span>{' '}
                {movieDetail.production_companies.map((company) => company.name).join(', ')}
            </div>
            <div>
                <span className="text-[gray] capitalize">Runtime:</span>{' '}
                {movieDetail.runtime}
            </div>
            <div>
                <span className="text-[gray] capitalize">orginal language:</span><span className='capitalize'>
                {movieDetail.original_language}</span>
            </div>

        </div>

    </div>
  
  )
}

export default Movie