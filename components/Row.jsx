"use client"
import { useState, useRef } from 'react'
//import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Thumbnail from './Thumbnail'
import Image from 'next/image'

const Row = ({title,movies}) => {

  const rowRef = useRef(null)
  const [isMoved,setIsMoved] = useState(false)

  const handleClick=(direction)=>{
    setIsMoved(true)

    if (rowRef.current){
      const{scrollLeft, clientWidth} = rowRef.current

      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft+clientWidth
      
      rowRef.current.scrollTo({left : scrollTo , behavior:"smooth"})
    }
  }
  
  return (
    <div className='h-40 space-y-5 md:space-y-2 lg:mb-[40px]'>
      <h2 className='w-56 md:text-2xl cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white'>
        {title}
      </h2>
      <div className='group relative md:-ml-2 '>
        {/* <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
        onClick={()=>handleClick("left")}
        /> */}
        <Image className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={()=>handleClick("left")}
          src="/leftArrow.png"
          width={36}
          height={36}
          alt='png'
        />
        <div 
          ref={rowRef}
          className='flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 '>
          {movies.map((movie)=>
            <Thumbnail key={"movieThm"+movie.id} movie={movie}/>
          )}          
        </div>
        {/* <ChevronRightIcon className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
        onClick={()=>handleClick("right")}
        /> */}
        <Image
          className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
          onClick={()=>handleClick("right")}
          src="/rightArrrow.png"
          width={36}
          height={36}
          alt='png'
        />
      </div>
    </div>
  )
}

export default Row