import axios from "axios";
import { API_KEY_V3 } from "../config";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";
const BASE_TMDb_URL = "https://api.themoviedb.org/3";

class RatorlyApi {
  // Requests related to Ratorly back end.
  static async request(endpoint, verb = "get", params = null) {

    console.debug("API Call:", endpoint, verb, params);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}/${endpoint}`);
    } else if (verb === "post") {
      q = axios.post(
        `${BASE_URL}/${endpoint}`, { params });
    }

    try {
      return await q;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      return Array.isArray(message) ? message : [message]; 
    }
  }

  static async getMovies() {
    let res = await this.request("movies/all");
    return res.data.movies;
  }

  static async getOneMovie(data) {
    let res = await this.request(`movies/${data}`);
    return res.data.movie;
  }

  static async addMovie(data) {
    let res = await this.request("movies/add", "post", data);
    return res.data.movie;
  }

  static async addRating(data) {
    let res = await this.request("movies/rate", "post", data);
    return res.data.ratings;
  }

  // Requests related to TMDb API
  static async dbRequest(endpoint, params = {}) {
    console.debug("TMDb Call:", endpoint, params);

    let q;
    if (endpoint === "now_playing") {

      console.debug(`Inside of dbRequest with endpoint ${endpoint} and this api: ${BASE_TMDb_URL}/${endpoint}?api_key=${API_KEY_V3}&language=en-US&page=1`);
      
      q = axios.get(
        `${BASE_TMDb_URL}/movie/${endpoint}?api_key=${API_KEY_V3}&language=en-US&page=1`
        );

    } else if (endpoint === "search/movie") {

      console.debug(`Inside of dbRequest with endpoint ${endpoint} and this api: ${BASE_TMDb_URL}/${endpoint}?api_key=${API_KEY_V3}&language=en-US&query=${params}&page=1&include_adult=false`);

      q = axios.get(
        `${BASE_TMDb_URL}/${endpoint}?api_key=${API_KEY_V3}&language=en-US&query=${params}&page=1&include_adult=false`
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
    return res.data.results;
  }
  
  // Returns an array of up to 20 movies related to search criteria
  static async movieSearch (search) {
    let res = await this.dbRequest("search/movie", search);
    console.log("Here are the results:", res);
    return res.data.results;
  }
}

export default RatorlyApi;
