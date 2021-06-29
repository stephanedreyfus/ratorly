import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

function MovieList({ listType, movies }) {
   console.debug(`Movielist got props ${listType} for type and ${movies} for content`);

   return (
      <div>
         {movies.map(movie => (
            <MovieCard />
         ))}
      </div>
   )
}

export default MovieList;