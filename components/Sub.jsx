"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import styles from "@/styles/style.module.css"
import { useGlobalContext } from '@/context/state';

const Sub = ({genres}) => {

  const { categories,setCategories } = useGlobalContext();

  useEffect(() => {
    setCategories(genres)
  }, [])

  return (
    
    <div className=" flex gap-14 items-center  ">
      <ul className={styles.demoDropdown }>
        <li><a href="#">Genre</a>
        <ul>
            <li>{genres.map((genre)=>(
            <Link href={`/movies/${genre.id}`}>{genre.name}</Link>
          ))}</li>
        </ul>
        </li>
     </ul>
    </div> 
  )
}

export default Sub