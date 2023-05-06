"use client"
import  { useEffect , useState  } from 'react'
import Image from 'next/image'
import { baseUrl } from '@/constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import Sub from './Sub'
import styles from "../styles/style.module.css";

const Banner = ({netflixOriginals,genres}) => {

  const [movie,setMovie]=useState()

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  return (
    <div className="flex flex-col  pt-16 md:space-y-4 lg:h-[65vh] lg:justify-between  ">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
      <Image
          fill
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          style={{objectFit:"cover"}}
        />
      </div>
      <Sub genres={genres}/>
      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        {movie?.title || movie?.name || movie?.original_name }
      </h1>
      <p className={styles.overview } >
         {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black ">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70 flex"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  )
}

export default Banner