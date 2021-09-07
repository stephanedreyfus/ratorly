import React, { useState } from "react";
import "./SearchForm.css";
import MovieList from "../movies/MovieList";
import RatorlyApi from "../api/RatorlyApi";

/** Search page of site.
 * 
 * Search for and display up to 20 movies matching the search term.
 * 
 * Routed at /search
 * 
 * Routes -> SearchForm
 */

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

  const notYet = (<p id="no-results">NO SEARCH RESULTS</p>);

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
      <section className="container">
        {searchResults.length > 0 ? showResults : notYet}
      </section>
    </div>
  )
}

export default SearchForm;
