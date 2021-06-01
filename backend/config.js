"user strict";

/** Shared config for application; can be required many places */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

// API keys for TMDB
// https://developers.themoviedb.org/3/movies/get-movie-details
const API_KEY_V3 = "2ce92882d951f47a76b948943e739de5";
const API_KEy_V4 = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2U5Mjg4MmQ5NTFmNDdhNzZiOTQ4OTQzZTczOWRlNSIsInN1YiI6IjYwYjZhOTk4ZGQ5MjZhMDAyOTQ5MWQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ccb3rKE2GxzY5Jh5Vgh2MwKACfjJBAvtkx5Wn0QcO9A"


// Choose proper database based on context (dev, testing, or production)
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "ratorly_test"
      : process.env.DATABASE_URL || "ratorly";
}

console.log("Jobly Config:".green);
console.log("SECRET_KEY".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
  API_KEY_V3,
  API_KEy_V4,
};
