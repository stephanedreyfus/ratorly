"user strict"

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
} = require("../expressError");

/** Functions for movies. */

class Movie {
  /** Get a movie from the db
   * @param movie_id integer
   * @returns { movie_id, title }
   * 
   * Throws NotFoundError if movie not found.
   */

  static async getMovie(movie_id) {
    const movieRes = await db.query(
          `SELECT movie_id, title
          FROM ratings
          WHERE movie_id = $1`,
          [movie_id],
    );

    const movie = movieRes[0];
    
    if (!movie) throw new NotFoundError(`No movie with ID: ${movie_id}`);

    return movie;
  }


  /** Add a vote to a movie
   * @param movie_id integer
   * @param vote string: "positive" or "negative"
   * @returns { title, positive, negative }
   * 
   * Throws NotFoundError if movie not found.
   */

  static async addVote(movie_id, vote) {
    const movieRes = await db.query(
          `SELECT *
          FROM ratings
          WHERE movie_id = $1`,
          [movie_id],
    );
    
    const movie = movieRes.rows[0];

    if (!movie) throw new NotFoundError(`No movie with ID: ${movie_id}`);

    const voteRes = await db.query(
          `UPDATE ratings
          SET $1 = $1 + 1
          WHERE movie_id = $2
          RETURNING title,
                    positive,
                    negative`,
          [vote, movie_id],
    );

    return voteRes;
  }

  /** Add a movie to the collection
   * @param movie {object} { movie_id, title, release_date, poster_path }
   * @returns { movie_id, title, release_date }
   * 
   * Throws BadRequestError if movie already in db.
   */

  static async addMovie({ movie_id, title, release_date, poster_path }) {
    const duplicateCheck = await db.query(
          `SELECT movie_title
          FROM ratings
          WHERE movie_id = $1`,
        [movie_id]
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate movie: ${title}`);
    }

    const result = await db.query(
          `INSERT INTO ratings
          (movie_id,
           positive,
           negative,
           title,
           release_date,
           poster_path)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING movie_id, title, release_date`,
        [
          movie_id,
          0,
          0,
          title,
          release_date,
          poster_path,
        ],
    );
  }
}

module.exports = Movie;