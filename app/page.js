import HomeContainer from '@/container/home'
import { fetchGenres, fetchTopRatedMovies, fetchPopularMovies } from '@/utils/requests';

async function HomePage() {
  
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];

  const [popularMovies, topRated,genres] =
    await Promise.all(pagePromises);
 
  return (
    <>
        <HomeContainer 
          popularMovies={popularMovies}
          topRated={topRated}
          genres={genres}
        />
    </>
  )
}


export default HomePage

