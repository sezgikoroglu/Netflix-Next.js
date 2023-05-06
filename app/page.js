import Image from 'next/image'
import HomeContainer from '@/container/home'
import { fetchGenres, fetchNetflixOriginals, fetchTopRatedMovies, fetchPopularMovies } from '@/utils/requests';
async function HomePage() {

  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchNetflixOriginals(),
    fetchGenres(),
  ];

  const [popularMovies, topRated,netflixOriginals, genres] =
    await Promise.all(pagePromises);
 
  return (
    <>
        <HomeContainer 
          netflixOriginals={netflixOriginals}
          popularMovies={popularMovies}
          // trendingNow={trendingNow}
          topRated={topRated}
          genres={genres}
        />
    </>
  )
}


export default HomePage

