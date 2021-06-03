"user strict"

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Functions for movies. */

class Movie {
  /** adds a vote to a movie
   * 
   * Returns { title, positive, negative }
   * 
   */

  static async addVote(id, vote, movie) {
    // Try to find movie, if no movie, add movie, then add vote
    const movieRes = await db.query(
      `SELECT *
      FROM ratings
      WHERE id = $1`,
      [id],
    );
    
    const localMovie = movieRes.rows[0];

    if (!localMovie) this.addMovie(movie);
  }

  static async addMovie(movie) {

  }
}

module.exports = Movie;