import React from "react";
import "./Homepage.css";
import MovieList from "../movies/MovieList";

/** Homepage of site.
 * 
 * Shows welcome message and twenty "current" mvovies.
 * 
 * Routed at /
 * 
 * Routes -> Homepage
 */

function Homepage({ currMovies }) {
  return (
  <div className="Homepage">
    <div className="container text-center">
      <p id="home-intro">ALL THE MOVIES YOU COULD EVERY RATE</p>
      <MovieList listType="Current Movies" movies={currMovies} />
    </div>
  </div>
  );
}

export default Homepage;