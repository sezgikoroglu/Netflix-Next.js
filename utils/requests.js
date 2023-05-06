const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY

// const requests={
//   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
//   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
//   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
//   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
//   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
//   fetchGenres:`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
// }

// async function fetchData(path, { query = "" } = {}) {
//     const res = await fetch(
//       `${BASE_URL}${path}?api_key=${process.env.API_KEY}&${query}`
//     );
//     return res.json();
// }

// export async function fetchSingleMovie(movieId) {
//     const res = await fetchData(`/movie/${movieId}`);
//     return res;
// }

// export async function fetchMoviesByGenre(genreId) {
//   const res = await fetchData(`/discover/movie`,{
//     query: `with_genres=${genreId}`,
//   });
//   return res.results;
// }

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(path, { query = "" } = {}) {
  
  try {
    const res = await fetch(
      `${BASE_URL}${path}?api_key=${API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchGenres() {
  try {
    const res = await fetchData("/genre/movie/list");
    return res.genres;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export async function fetchPopularMovies() {
  try {
    const res = await fetchData("/movie/popular");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchNetflixOriginals() {
  try {
    const res = await fetchData("/discover/movie",{
      query: "with_networks=213"
    });
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    const res = await fetchData(`/movie/${movieId}`);
    return res;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchMoviesByGenre(genreId) {
  try {
    const res = await fetchData(`/discover/movie`, {
      query: `with_genres=${genreId}`,
    });
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}


// export default requests

