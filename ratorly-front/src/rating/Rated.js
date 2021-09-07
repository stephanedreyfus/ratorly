import React from "react";
import "./Rated.css";
import MovieList from "../movies/MovieList";

/** Rated page of site.
 * 
 * Shows movies with ratings that thus already exist in local db.
 * 
 * Routed at /rating
 * 
 * Routes -> Rated
 */

function Rated({ ratedMovies }) {
  return (
    <div className="rated-movies">
      <div className="container text-center">
      <p id="rated-title">PREVIOUSLY RATED</p>
        {ratedMovies
          ? (
              <MovieList listType="Already Rated" movies={ratedMovies} />
            ) : (
              <p>No movies have been rated yet!</p>
            )}
      </div>
    </div>
  );
}

export default Rated;