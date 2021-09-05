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
      <div className="containter text-center">
      <h1 className="mb-4 font-weight-bold">A Small Collection of Movies Already Rated</h1>
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