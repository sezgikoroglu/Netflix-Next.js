import { notFound } from "next/navigation";
import React from "react";
import MovieContainer from "@/container/movie";
import { fetchSingleMovie } from "@/utils/requests";

async function MoviePage({ params, searchParams }) {
    
    const movieDetail = await fetchSingleMovie(params.id);
    return(
            <MovieContainer movieDetail={movieDetail} />
    )
}

export default MoviePage;