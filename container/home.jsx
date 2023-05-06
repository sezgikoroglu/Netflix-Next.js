import React from 'react'
import Banner from '@/components/Banner'
import Row from '@/components/Row'

const HomeContainer = ({
  netflixOriginals,
  popularMovies,
  //trendingNow,
  topRated,
  genres
}) => {
    console.log(genres)
  return (
    <>  
        <Banner netflixOriginals={netflixOriginals} genres={genres} />
        <section className=' md:space-y-24 '>
          {/* <Row title="Trending Now" movies={trendingNow} /> */}
          <Row title="Top Rated" movies={topRated} />
          <Row title="Popular Movies" movies={popularMovies}/>
        </section>
    </>
  )
}

export default HomeContainer






