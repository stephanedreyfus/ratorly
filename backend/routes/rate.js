"user strict"

/** Routes for rating movies. */

const express = require("express");
const { BarRequestError, BadRequestError } = require("../expressError");
const Movie = require("../models/movie");

const router = express.Router({ mergeParams: true });

// This temporary route will be replaced by front end page.
router.get("/", async function (req, res, next) {
  try {
    // Api call to get some movies goes here
    return res.send('<h2>The movies page! Will populate soon!</h2>')
  } catch (err) {
    return next(err);
  }
});


/** POST / { rating, movie } => { rating } OR { rating, movie }
 * 
 * incoming data should be { rate, movie_id, title, release_date, poster_path }
 * 
 * Returns { title, positive, negative }
*/
router.post("/"), async function (req, res, next) {
  try {
    if (
        !req.body ||
        (req.body.rating !== "positive" &&
        req.body.rating !== "negative")
       ) {
         throw new BadRequestError("Improper rating data.");
       }
    
    const votes = await Movie.addVote(req.body);
    return res.status(200).json({ votes });
  } catch (err) {
    return next(err);
  }
}

module.exports = router;

// When voting and searching for a movie, remember to send id as an integer!
