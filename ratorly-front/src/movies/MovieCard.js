import React from "react";
import "./MovieCard.css";
import RatorlyApi from "../api/RatorlyApi";

async function doRate(movieId, rating) {
  console.log("Made it into doRate.")
  try {
    const res = await RatorlyApi.addRating(movieId, rating);
    if (res) {
      const toChange = document.getElementById(`${movieId}${rating}`);
      toChange.value = +toChange.value + 1;
    }
  } catch (err) {
    console.log("We got back this error:", err);
  }
}

function MovieCard({ title, positive, negative, poster, id }) {
  // TODO Look for good incon for ratings <p>. Fontawesome require membership for React.
  return (
    <div className="movie-card">
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`} alt={title} />
      <div className="movie-title">{title}</div>
      <div className="ratings-container">
        <p>Ratings: </p>
        <span><i className="fa-solid fa-thumbs-up" onClick={() => doRate(id, "positive")}></i> <p id={`${id}positive`}>{positive || 0}</p></span>
        <span><i className="fa-solid fa-thumbs-down" onClick={() => doRate(id, "negative")}></i> <p id={`${id}negative`}>{negative || 0}</p></span>
      </div>
    </div>
  )
}

export default MovieCard;