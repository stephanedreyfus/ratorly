import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import RatorlyApi from "./api/RatorlyApi";
import { Spinner } from "reactstrap";
import './App.css';

// TODO Un-Kludge reload of movies when using nav bar.

function App() {
  console.log("At very top of App.js.");
  const [currentMovies, setCurrentMovies] = useState(null);
  const [ratedMovies, setRatedMovies] = useState(null);
  const [moviesLoaded, setMoviesLoaded] = useState(false);

  async function getMovies() {
    setMoviesLoaded(false);
    try {
      let moviesToShow = await RatorlyApi.getCurrentMovies();
      // Check to see if any current movies have ratings.
      for (let movie of moviesToShow) {
        try {
          let res = await RatorlyApi.getOneMovie(movie.id);
            if (res.movie_id) {
                movie.positive = res.positive;
                movie.negative = res.negative;
              }
          } catch (err) {
            console.log("Error from forEach catch in getMovies:", err);
          }
        }
      setCurrentMovies(moviesToShow);
      setMoviesLoaded(true);
    } catch (err) {
      console.log("This is the error inside of get movies for getCurrentMovies", err);
      setMoviesLoaded(false);
    }
  }
  
  async function getRatedMovies() {
    setMoviesLoaded(false);
    try {
      let res = await RatorlyApi.getMovies();
      setRatedMovies(res);
      setMoviesLoaded(true);
    } catch (err) {
      console.log("This is the error inside of getMovies", err);
      setMoviesLoaded(false);
    }
  }

  // Collect movies to display from both TMDb and local db.
  useEffect(() => {
    setMoviesLoaded(false);
    getMovies();
    getRatedMovies();
  }, []);

  if (!moviesLoaded || !currentMovies || !ratedMovies) return (
    <div className="spin-container">
      <Spinner color="info" id="spinner"/>
    </div>
  )

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation getCurrent={getMovies} getRated={getRatedMovies}/>
        <Routes currMovies={currentMovies}
                ratedMovies={ratedMovies}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
