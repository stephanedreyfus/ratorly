import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Rated from "../rating/Rated";
import TestPage from "../homepage/TestPage";


/** Site-wide routes.
 * 
 * Visiting a non-existant route redirects to the homepage.
 */
function Routes({ currMovies ,ratedMovies }) {
  return (
    <div className="pt-5">
      <Switch>

        <Route exact path="/">
          <Homepage currMovies={currMovies} />
        </Route>

        <Route exact path="/rating">
          <Rated ratedMovies={ratedMovies} />
        </Route>

        <Route>
          <TestPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes;