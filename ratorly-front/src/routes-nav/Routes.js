import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Rated from "../rating/Rated";


/** Site-wide routes.
 * 
 * Visiting a non-existant route redirects to the homepage.
 */
function Routes({ currMovies, ratedMovies }) {
  return (
    <div className="pt-5">
      <Switch>

        <Route>
          <Homepage currMovies={currMovies} />
        </Route>

        <Route>
          <Rated ratedMovies={ratedMovies} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes;