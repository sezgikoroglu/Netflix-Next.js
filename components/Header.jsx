"use client"
import React, { useEffect, useState } from 'react'
//import {SearchIcon , BellIcon} from "@heroicons/react/solid"
import Link from 'next/link'
import Image from 'next/image'

const Header = ({genres}) => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        console.log(isScrolled)
        const handleScroll=()=>{
            if(window.scrollY > 0 ){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

  return (
    <header className={` transition duration-500 ease-out ${isScrolled && "bg-[#141414]  "}`} >
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/" className="cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            priority
            width={100}
            height={100}
            alt='img'
            style={{cursor:"pointer" , objectFit:"contain" }}
          />
        </Link>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
            <Link href="/"> Movies</Link>
          </li> 
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li> 
        </ul>
      </div>
      
      <div className="flex items-center space-x-4 text-sm font-light text-white">
        {/* <SearchIcon className="sm hidden h-6 w-6 sm:inline" />  */}
        <p className="hidden lg:inline">Kids</p>
        {/* <BellIcon className="h-6 w-6 " />  */}
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="img"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header