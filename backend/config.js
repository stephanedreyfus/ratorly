"user strict";

/** Shared config for application; can be required many places */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";


