import React, { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import Navigation from ".Navigation";
import Routes from "./Routes";
import RatorlyApi from "./RatorlyApi";
import './App.css';
import { ClipLoader } from "react-spinners";

function App() {
  const [currentMovies, setCurrentMovies]
  const [moviesLoaded, setMoviesLoaded] = useState(false);

  // Collect movies to display from TMDb
  useEffect(() => {
    async function getMovies {
      try {
        let moviesToShow = await RatorlyApi.getCurrentMovies()
        setCurrentMovies(moviesToShow);
        setMoviesLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <p>Eventually search for and rate movies.</p>
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
