import React from 'react'
import styles from "@/components/Skeleton"

const Skeleton = ({width,height}) => {
  return (
    <div className={styles.skeleton} style={{ width, height }}></div>
  )
}

export default Skeleton