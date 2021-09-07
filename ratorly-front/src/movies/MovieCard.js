import React, { useState } from "react";
import "./MovieCard.css";
import RatorlyApi from "../api/RatorlyApi";
// import { UncontrolledTooltip } from "reactstrap";


function MovieCard({ title, positive, negative, poster, release, id }) {

  const [rateInProgress, setRateInProgress] = useState(false);
  
  async function doRating(movie_id, rating) {
    try {
      const res = await RatorlyApi.addRating({ movie_id, rating });
      if (res) {
        const toChange = document.getElementById(`${movie_id}${rating}`);
        toChange.innerText = +toChange.innerText + 1;
        setRateInProgress(false);
      }
      return res;
    } catch (err) {
      console.log("We got back this error:", err);
    }
  }
  
  async function tryRating(movie_id, rating) {
    // Control rage clicking on rate elements.
    if (rateInProgress === true) return;

    setRateInProgress(true);
    try {
      const checkForMovie = await RatorlyApi.getOneMovie(movie_id);
      if (checkForMovie) doRating(movie_id, rating);
    } catch (err) {
      if (err.status === "Cannot read property 'movie' of undefined" ||
                         "Cannot read properties of undefined (reading 'movie')") {
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
        if (res) {
          // Update rating on DOM to match updated db.
          const toChange = document.getElementById(`${movie_id}${rating}`);
          toChange.innerText = +toChange.innerText + 1;
          setRateInProgress(false);
        }
        return res;
      }
    else {
      console.log("Bottom of tryRating with this error:", err);
    }
    }
  }

  // TODO Look for good icon for ratings <p>. Fontawesome requires membership for React icons.
  return (
    <div className="movie-card">
      <img className="img-card" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`} alt={`Poster for movie ${title}`} />
      <div className="movie-title">
        {title}
        {/* <span href="#" id={`${id}Tooltip`}>{title}</span>
        <UncontrolledTooltip placement="bottom" target={`${id}Tooltip`}>{title}</UncontrolledTooltip> */}
      </div>
      <div className="ratings-container">
        <p>Ratings: </p>
        <span><img src="../../public/like.svg" onClick={() => tryRating(id, "positive")} alt="Thumbs up."/> <p id={`${id}positive`}>{positive || 0}</p></span>
        <span><img src="../../public/thumb-down.svg" onClick={() => tryRating(id, "negative")} alt="Thumbs down."/> <p id={`${id}negative`}>{negative || 0}</p></span>
        {/* <span><i className="fa-solid fa-thumbs-up rate-icon" onClick={() => tryRating(id, "positive")}></i> <p id={`${id}positive`}>{positive || 0}</p></span>
        <span><i className="fa-solid fa-thumbs-down rate-icon" onClick={() => tryRating(id, "negative")}></i> <p id={`${id}negative`}>{negative || 0}</p></span> */}
      </div>
    </div>
  )
}

export default MovieCard;
