import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

function MovieList({ listType, movies }) {
   console.debug(`Movielist got props ${listType} for type and ${movies} for content`);
   return (
      <div className="movie-list">
         {movies.map(movie => (
            <MovieCard key={movie.id || movie.movie_id}
                       title={movie.title}
                       positive={movie.positive}
                       negative={movie.negative}
                       poster={movie.poster_path}
            />
         ))}
      </div>
   )
}

export default MovieList;