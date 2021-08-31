import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import RatorlyApi from "./api/RatorlyApi";
import './App.css';
import { ClipLoader } from "react-spinners";

function App() {
  console.log("At very top of App.js.");
  const [currentMovies, setCurrentMovies] = useState(null);
  const [ratedMovies, setRatedMovies] = useState(null);
  const [moviesLoaded, setMoviesLoaded] = useState(false);

  async function getMovies() {
    console.log("In useEffect getMovies.");
    try {
      let moviesToShow = await RatorlyApi.getCurrentMovies();
      setCurrentMovies(moviesToShow);
      setMoviesLoaded(true);
    } catch (err) {
      console.log("This is the error inside of get movies for getCurrentMovies", err);
      setMoviesLoaded(false);
    }
  }
  
  async function getRatedMovies() {
    console.log("In useEffect getRatedMovies.");
    try {
      let res = await RatorlyApi.getMovies();
      setRatedMovies(res);
      setMoviesLoaded(true);
    } catch (err) {
      console.log("This is the error inside of getMovies", err);
      setMoviesLoaded(false);
    }
  }

  // Collect movies to display from TMDb
  useEffect(() => {
    setMoviesLoaded(false);
    getMovies();
  }, []);

  if (!moviesLoaded || !currentMovies) return <ClipLoader />

  return (
    <BrowserRouter>
      <div className="App">
        {/* Need to move search to a new function that also updates page content, pass that down, not API itself. */}
        <Navigation getCurrent={getMovies} getRated={getRatedMovies}/>
        <Routes currMovies={currentMovies}
                ratedMovies={ratedMovies}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
