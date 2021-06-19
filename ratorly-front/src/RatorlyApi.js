import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

class RatorlyApi {
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
}

export default RatorlyApi;