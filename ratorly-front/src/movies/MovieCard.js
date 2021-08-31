import React from "react";
import "./MovieCard.css";
import RatorlyApi from "../api/RatorlyApi";


function MovieCard({ title, positive, negative, poster, release, id }) {

  // TODO refactor these functios up to App.js
  
  async function doRating(movie_id, rating) {
    try {
      const res = await RatorlyApi.addRating({ movie_id, rating });
      if (res) {
        const toChange = document.getElementById(`${movie_id}${rating}`);
        toChange.value = +toChange.value + 1;
      }
    } catch (err) {
      console.log("We got back this error:", err);
    }
  }
  
  async function tryRating(movie_id, rating) {
    try {
      const checkForMovie = await RatorlyApi.getOneMovie(movie_id);
      if (checkForMovie) doRating(movie_id, rating);
    } catch (err) {
      console.log("Error for attempted add in MovieCard:", err);
      console.log(`Tryig to take apart error. This is message: ${err.message}, this is status: ${err.status}`);
      if (err.message === "Cannot read property 'movie' of undefined") {
        console.log("Made it into error if after checking for movie.");
        const movie = {
          movie_id: id,
          positive: rating === "positive" ? 1 : 0,
          negative: rating === "negative" ? 1 : 0,
          title: title,
          release_date: release,
          poster_path: poster
        }
        const res = await RatorlyApi.addMovie(movie);
        return res;
      }
    }
  }

  // TODO Look for good icon for ratings <p>. Fontawesome requires membership for React icons.
  return (
    <div className="movie-card">
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`} alt={title} />
      <div className="movie-title">{title}</div>
      <div className="ratings-container">
        <p>Ratings: </p>
        <span><i className="fa-solid fa-thumbs-up" onClick={() => tryRating(id, "positive")}></i> <p id={`${id}positive`}>{positive || 0}</p></span>
        <span><i className="fa-solid fa-thumbs-down" onClick={() => tryRating(id, "negative")}></i> <p id={`${id}negative`}>{negative || 0}</p></span>
      </div>
    </div>
  )
}

export default MovieCard;