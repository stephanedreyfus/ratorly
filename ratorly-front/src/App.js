import React, { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import RatorlyApi from "./api/RatorlyApi";
import './App.css';
import { ClipLoader } from "react-spinners";

function App() {
  const [currentMovies, setCurrentMovies] = useState(null);
  const [ratedMovies, setRatedMovies] = useState(null);
  const [moviesLoaded, setMoviesLoaded] = useState(false);

  // Collect movies to display from TMDb
  useEffect(() => {
    async function getMovies() {
      try {
        let moviesToShow = await RatorlyApi.getCurrentMovies()
        setCurrentMovies(moviesToShow);
      } catch (err) {
        console.log("This is the error inside of get movies for getCurrentMovies", err);
        setMoviesLoaded(false);
      }
    }
    
    async function getRatedMovies() {
      try {
        let res = await RatorlyApi.getMovies()
        console.debug("What is res and do we need to unpack to get to array?", res);
        setRatedMovies(res);
        setMoviesLoaded(true);
      } catch (err) {
        console.log("This is the error inside of getMovies", err);
        setMoviesLoaded(false);
      }
    }

    setMoviesLoaded(false);
    getMovies();
    getRatedMovies();
  }, []);

  // document.getElementById("nav-container").onclick(e => {
  //   e.preventDefault();
  //   console.log(`You just clicked on ${e.target}`);
  // })

  if (!moviesLoaded || !currentMovies || !ratedMovies) return <ClipLoader />

  return (
    <BrowserRouter>
      <div className="App">
        <p id="home-intro">Search For and Rate Movies</p>
        {/* Need to move search to a new function that also updates page content, pass that down, not API itself. */}
        <Navigation />
        <Routes currMovies={currentMovies}
                ratedMovies={ratedMovies}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
