import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const myMovieList = React.memo(
   function MovieList({ listType, movies }) {

    console.debug(`Movielist got props ${listType} for type and ${movies} for content`);
    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id || movie.movie_id}
                     id={movie.id || movie.movie_id}
                     title={movie.title}
                     positive={movie.positive}
                     negative={movie.negative}
                     poster={movie.poster_path}
                     release={movie.release_date}
          />
        ))}
      </div>
    );
  }
);

export default myMovieList;