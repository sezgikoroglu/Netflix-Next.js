"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { baseUrl } from '@/constants/movie'
import { useGlobalContext } from '@/context/state';

const MoviesByGenre = ({paramsId,movies}) => {
    
    const { categories,setCategories } = useGlobalContext();

  return (
    <div className=' space-x-10  lg:h-[65vh] mt-20 p-12 items-center'>
        <h2 className="capitalize w-56 md:text-2xl cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
            {
               categories.find(ctg=>ctg.id == paramsId )?.name
            }
        </h2>
        
        <div className='grid grid-cols-3 gap-6 mt-7'>
            {
            movies.map(movie=>(
              <div key={"movies"+movie.id} className='w-full h-full flex flex-col gap-2 items-center'>
                <Link href={`/movie/${movie.id}`} className='relative w-full h-full flex flex-col gap-2 items-center' >
                    <Image  className='relative object-cover rounded-sm  md:rounded md:hover:scale-110 transition duration-200 ease-out'
                        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path || movie?.backdrop_path}`}
                        height={600}
                        width={300}
                        alt="img"
                    />
                    <p>{movie.title}</p>
                </Link>
              </div>
            ))
            }
        </div>
        
    </div>
  )
}

export default MoviesByGenre