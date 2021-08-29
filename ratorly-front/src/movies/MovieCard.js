import React from "react";
import "./MovieCard.css";

function MovieCard({ title, positive, negative, poster }) {
  // TODO Look for good fontawesome for ratings <p>
  return (
    <div className="movie-card">
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`} alt={title} />
      <div className="movie-title">{title}</div>
      <div className="ratings-container">
        <p>Ratings: </p>
        <p><i className="fa-solid fa-thumbs-up"></i> {positive || 0}</p>
        <p><i className="fa-solid fa-thumbs-down"></i> {negative || 0}</p>
      </div>
    </div>
  )
}

export default MovieCard;