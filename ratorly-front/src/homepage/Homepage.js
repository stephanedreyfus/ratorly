import React from "react";
// import { Link } from "react-router-dom";
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
      <h1 className="mb-4 font-weight-bold">Ratorly</h1>
      <p>All the movies you could ever rate!</p>
      <MovieList listType="Current Movies" movies={currMovies} />
    </div>
  </div>
  );
}

export default Homepage;