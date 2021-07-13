import React from "react";
import { NavLink } from "react-router-dom";

/** Navigation bar for site. Appears on every page.
 * 
 * Rendered by App.
*/

function Navigation() {
  return (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item mr-4">
      <NavLink className="nav-link" to="/">
        Ratorly
      </NavLink>
    </li>
    <li className="nav-item mr-4">
      <NavLink className="nav-link" to="/rating">
        Rate Movies
      </NavLink>
    </li>
  </ul>
  );
}

export default Navigation;
