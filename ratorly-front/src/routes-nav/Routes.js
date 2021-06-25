import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Homepage from "../homepage/Homepage";


/** Site-wide routes.
 * 
 * Visiting a non-existant route redirects to the homepage.
 */
function Routes() {
  return (
    <div className="pt-5">
      <Switch>

        <Route>
          <Homepage />
        </Route>
        
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes;