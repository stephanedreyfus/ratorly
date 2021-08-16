import React from "react";
import "./MovieCard.css";

function MovieCard({ title, positive, negative, poster }) {
  // TODO Look for good fontawesome for ratings <p>
  return (
    <div className="movie-card">
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`} alt={title} />
      <div className="movie-title">{title}</div>
      <div className="ratings-container">
        Ratings:
        <p>{0 || positive}</p>
        <p>{0 || negative}</p>
      </div>
    </div>
  )
}

export default MovieCard;