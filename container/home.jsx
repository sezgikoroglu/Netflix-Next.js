import React from 'react'
import Banner from '@/components/Banner'
import Row from '@/components/Row'

const HomeContainer = ({
  popularMovies,
  topRated,
  genres
}) => {
   
  return (
    <>  
        <Banner  genres={genres} />
        <section className=' md:space-y-24 '>
          <Row title="Top Rated" movies={topRated} />
          <Row title="Popular Movies" movies={popularMovies}/>
        </section>
    </>
  )
}

export default HomeContainer






