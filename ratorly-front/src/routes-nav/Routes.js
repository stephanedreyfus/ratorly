import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Homepage from "../homepage/Homepage";


/** Site-wide routes.
 * 
 * Visiting a non-existant route redirects to the homepage.
 */
function Routes({ currMovies }) {
  return (
    <div className="pt-5">
      <Switch>

        <Route>
          <Homepage currMovies={currMovies} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes;