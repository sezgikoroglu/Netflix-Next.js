import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useMovies() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?api_key=8dfe319a71b29aa3264820c36da4b774&with_networks=213`,
    fetcher
  )
  const isLoading = !error && !data
  return {
    movies: data?.results,
    isLoading,
    isError: error,
  }
}

