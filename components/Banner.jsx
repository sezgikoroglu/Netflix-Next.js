"use client"
import  { useEffect , useState  } from 'react'
import Image from 'next/image'
import { baseUrl } from '@/constants/movie'
//import { FaPlay } from 'react-icons/fa'
//import { InformationCircleIcon } from '@heroicons/react/outline'
import Sub from './Sub'
import styles from "../styles/style.module.css";
import useMovies from '../swr/useMovie'

const Banner = ({genres}) => {

  const { movies, isLoading } = useMovies()
  const [movie,setMovie]=useState()

  useEffect(() => {
    if (movies) {
      setMovie(movies[Math.floor(Math.random() * movies.length)])
    }
  }, [movies])

  if (isLoading || !movie) return <div>Loading...</div>

  return (
    <div className="flex flex-col  pt-16 md:space-y-4 lg:h-[65vh] lg:justify-between  ">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
      <Image
          fill
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt='img'
          style={{objectFit:"cover"}}
          priority
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
          {/* <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> */}
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70 flex"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
           More Info 
        </button>
      </div>
    </div>
  )
}

export default Banner