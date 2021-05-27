"user strict"

/** Routes for rating movies. */

const express = require("express");
const { BarRequestError } = require("../expressError");
const Movie = require("../models/movie");

const router = express.Router({ mergeParams: true });

router.get("/", async function (req, res, next) {
  try {
    // Api call to get some movies goes here
    return <h2>The movies page! Will populate soon!</h2>
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
