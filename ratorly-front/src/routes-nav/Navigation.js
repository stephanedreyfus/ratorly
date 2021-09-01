import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav
} from 'reactstrap';

/** Navigation bar for site. Appears on every page.
 * 
 * Rendered by App.
*/

function Navigation({doSearch, getCurrent, getRated}) {
  return (
  <div >
    <Navbar id="nav-container">
      <Nav>
        <NavLink className="nav-link" to="/" onClick={() => getCurrent()}>
          Ratorly
        </NavLink>
      </Nav>
      <Nav>
        <NavLink className="nav-link" to="/rating" onClick={() => getRated()}>
          Rated Movies
        </NavLink>
      </Nav>
      <Nav>
        <NavLink className="nav-link" to="/search">
          Search for Movies to Rate
        </NavLink>
      </Nav>
      <Nav>
        <NavLink className="nav-link" to="/test">
          ReactStrap Test Page
        </NavLink>
      </Nav>
    </Navbar>
  </div>  
  );
}

export default Navigation;
