import React, { useState } from "react";
import MovieList from "../movies/MovieList";
import RatorlyApi from "../api/RatorlyApi";

// TODO stop re-render of MovieList child on searchData state update.

function SearchForm() {

  const [searchData, setSearchData] = useState({});
  const [searchResults, setSearchResults] = useState([])

  const handleChange = evt => {
    const { name, value } = evt.target
    setSearchData(searchData => ({
      ...searchData,
      [name]: value
    }));
  }

  const doSearch = async (evt) => {
    evt.preventDefault();
    setSearchResults([]);

    let res = await RatorlyApi.movieSearch(searchData.search);
    setSearchResults(res);
  }

  const notYet = (<h3>No Search Results</h3>);

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
        {searchResults.length > 0 ? showResults : notYet}
      </section>
    </div>
  )
}

export default SearchForm;
