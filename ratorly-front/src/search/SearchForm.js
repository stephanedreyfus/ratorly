import React, { useEffect, useState } from "react";
import MovieList from "../movies/MovieList";
import RatorlyApi from "../api/RatorlyApi";

function SearchForm () {

  const [searchData, setSearchData] = useState({});
  const [searchResults, setSearchResults] = useState([])

  // This one works (as well as the call in App.js)
  useEffect(() => {
    async function doSearch () {
      try {
        let res = await RatorlyApi.movieSearch("morph");
        setSearchResults(() => res.results);
      } catch (err) {
        console.log("This is the error inside of get movies for getCurrentMovies", err);
      }
    }

    doSearch();
  }, [])

  const handleChange = evt => {
    const { name, value } = evt.target
    setSearchData(searchData => ({
      ...searchData,
      [name]: value
    }));
  }

  // This one never works. It goes through the API code, fails the make the call, and then refreshes the whole app.
  const doSearch = async () => {
    setSearchResults(() => []);
    let res = await RatorlyApi.movieSearch(searchData.search);
    console.log("This is the result fro the search field call:", res.results);
    setSearchResults(() => res.results);
  }

  const notYet = (<h3>No Search Results Yet</h3>);

  const showResults = (<MovieList listType="Search Results" movies={searchResults} />)

  return (
    <div>
      <form onSubmit={doSearch} id="search-form">
        <label htmlFor="search">Search for a movie: </label>
        <input type="search"
              id="search-field"
              onChange={handleChange}
              name="search"
              required={true}
              placeholder="Enter a search term."
        />
      </form>
      <section>
        {searchResults ? showResults : notYet}
      </section>
    </div>
  )
}

export default SearchForm;
