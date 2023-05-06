import React from 'react'
import Banner from '@/components/Banner'
import Row from '@/components/Row'

const HomeContainer = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  genres
}) => {
    
  return (
    <>  
        <Banner netflixOriginals={netflixOriginals} genres={genres} />
        <section className=' md:space-y-24 '>
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
    </>
  )
}

export default HomeContainer






