import React from "react";
import "./Rated.css";
import MovieList from "../movies/MovieList";

function Rated({ ratedMovies }) {

  return (
    <div className="rated-movies">
      <h1 className="mb-4 font-weight-bold">A Small Collection of Movies Already Rated</h1>
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