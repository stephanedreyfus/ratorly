"user strict"

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Functions for movies. */

class Movie {
  /** adds a vote to a movie
   * @param id integer
   * @param vote string: "positive" or "negative"
   * @returns { title, positive, negative }
   * 
   * Throws NotFoundError if movie not found.
   */

  static async addVote(id, vote) {
    const movieRes = await db.query(
          `SELECT *
          FROM ratings
          WHERE id = $1`,
          [id],
    );
    
    const movie = movieRes.rows[0];

    if (!movie) throw new NotFoundError(`No movie with ID: ${id}`);

    const voteRes = await db.query(
          `UPDATE ratings
          SET $1 = $1 + 1
          WHERE id = $2
          RETURNING title,
                    positive,
                    negative`,
          [vote, id],
    );

    return voteRes;
  }
}

module.exports = Movie;