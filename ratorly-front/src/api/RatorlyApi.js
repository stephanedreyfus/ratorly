import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";
const BASE_TMDb_URL = "https://api.themoviedb.org/3/movie";
const TMDb_KEY = "?api_key=2ce92882d951f47a76b948943e739de5&language=en-US&page=1"

class RatorlyApi {
  // Requests related to Ratorly back end.
  static async request(endpoint, params = {}, verb = "get") {

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}/${endpoint}`, { params: {params} });
    } else if (verb === "post") {
      q = axios.post(
        `${BASE_URL}/${endpoint}`, { params });
    }

    try {
      return await q;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message]; 
    }
  }

  static async getMovies() {
    let res = await this.request("movies");
    return res.movies;
  }

  static async getOneMovie(data) {
    let res = await this.request(`${data}`);
    return res.movie;
  }

  static async addMovie(data) {
    let res = await this.request("add", data, "post");
    return res.movie;
  }

  static async addRating(data) {
    let res = await this.request("rate", data, "post");
    return res.ratings;
  }

  // Requests related to TMDb API
  static async dbRequest(endpoint, params = {}) {
    console.debug("TMDb Call:", endpoint, params);

    let q;
    // Else needs updating from searhch type available at TMDb
    // Need to check how TMDb handles searches.
    if (endpoint === "now_playing") {
      q = axios.get(
        `${BASE_TMDb_URL}/${endpoint}${TMDb_KEY}`
      );
    } else {
      // TODO Look up and set elses to other known search parameters. TMDb does not take JSON body.
      q = axios.get(
        `${BASE_TMDb_URL}/${endpoint}${TMDb_KEY}`, { params: { params }}
      );
    }

    try {
      return await q;
    } catch (err) {
      console.log ("DB API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
 
  // Returns an array of 20 movies currently showing.
  static async getCurrentMovies() {
    let res = await this.dbRequest("now_playing");
    return res.results;
  }
}

export default RatorlyApi;