import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav
} from 'reactstrap';

/** Navigation bar for site. Appears on every page.
 * 
 * Rendered by App.
*/

function Navigation() {
  return (
  <div>
    <Navbar>
      <Nav>
        <NavLink className="nav-link" to="/">
          Ratorly
        </NavLink>
      </Nav>
      <Nav>
        <NavLink className="nav-link" to="/rating">
          Rate Movies
        </NavLink>
      </Nav>
    </Navbar>
  </div>  
  );
}

export default Navigation;
