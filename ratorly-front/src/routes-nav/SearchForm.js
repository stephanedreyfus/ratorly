import React, { useState } from "react";
import RatorlyApi from "../api/RatorlyApi";

function SearchForm () {

  const [searchData, setSearchData] = useState({});

  const handleChange = evt => {
    evt.preventDefault();
    const { name, value } = evt.target
    setSearchData(searchData => ({
      ...searchData,
      [name]: value
    }));
  }

  const doSearch = async () => {
    let res = await RatorlyApi.movieSearch(searchData.search);
    console.log("This is the result fro the search field call:", res);
  }

  return (
    <form onSubmit={doSearch} id="search-form">
      <label htmlFor="search"></label>
      <input type="search"
             id="search-field"
             onChange={handleChange}
             name="search"
             required={true}
             placeholder="Search for a movie."
      />
    </form>
  )
}

export default SearchForm;
