import React from 'react'
import Banner from '@/components/Banner'
import Row from '@/components/Row'
import Categories from '@/components/Categories'
import Sub from '@/components/Sub'

const HomeContainer = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  //products,
  genres
}) => {
    
  return (
    <>  
        {/* <Categories genres={genres}/> */}
        {/* <Sub /> */}
        <Banner netflixOriginals={netflixOriginals} genres={genres} />
        <section className=' md:space-y-24 '>
        <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          {/* <Row title="Action Thrillers" movies={actionMovies} /> */}
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          {/* <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} /> */}
        </section>
    </>
  )
}

export default HomeContainer






