import Image from 'next/image'
import HomeContainer from '@/container/home'
import requests from '@/utils/requests'

async function HomePage() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    genres,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()).then(res => res.results),
    fetch(requests.fetchTrending).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchTopRated).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchActionMovies).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchComedyMovies).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchDocumentaries).then((res) => res.json()).then(res => res.results ),
    fetch(requests.fetchGenres).then((res) => res.json()).then(res => res.genres )
  ])
  
  return (
    <>
        <HomeContainer 
          netflixOriginals={netflixOriginals}
          trendingNow={trendingNow}
          topRated={topRated}
          actionMovies={actionMovies}
          comedyMovies={comedyMovies}
          horrorMovies={horrorMovies}
          romanceMovies={romanceMovies}
          documentaries={documentaries}
          genres={genres}
        />
    </>
  )
}


export default HomePage

