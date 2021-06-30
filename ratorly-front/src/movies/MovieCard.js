import React from "react";
import "./MovieCard.css";

function MovieCard({ title, positive, negative, poster }) {
    // TODO Look for good fontawesome for ratings <p>
    return (
        <div className="movie-card">
            <img src={poster} alt={title} />
            <div className="movie-title">{title}</div>
            <div>
                Ratings:
                <p>{positive}</p>
                <p>{negative}</p>
            </div>
        </div>
    )
}

export default MovieCard;