import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Thumbnail = ({movie}) => {
    
  return (
    <div className='relative h-[130px]  min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Link href={`/movie/${movie.id}`}  >
        <div className='relative h-[130px]'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
               movie.poster_path || movie?.poster_path
          }`}
          fill
          className='rounded-sm object-cover md:rounded'
          alt='img'
          sizes="(max-width: 768px) 118px,
              (max-width: 1200px) 180px,
              "
        />
        </div>
      </Link>
    </div>
  )
}

export default Thumbnail