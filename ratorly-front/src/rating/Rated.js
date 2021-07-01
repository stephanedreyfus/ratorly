import React from "react";
import "./Rated.css";
import MovieList from "../movies/MovieList";

function Rated({ ratedMovies }) {

  return (
    <div className="rated-movies">
      {ratedMovies
        ? (
            <MovieList listType="Already Rated" movies={ratedMovies} />
          ) : (
            <p>No movies have been rated yet!</p>
          )}
    </div>
  );
}

export default Rated;