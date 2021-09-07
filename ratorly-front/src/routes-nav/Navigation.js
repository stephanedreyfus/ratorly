import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap';

/** Navigation bar for site. Appears on every page.
 * 
 * Rendered by App.
*/

function Navigation({doSearch, getCurrent, getRated}) {
  return (
  <div >
    <Navbar color="dark" dark id="nav-container">
      <NavbarBrand href="/">RATORLY</NavbarBrand>
      <Nav>
        <NavLink className="nav-link" to="/" onClick={() => getCurrent()}>
          Current Releases
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
    </Navbar>
  </div>  
  );
}

export default Navigation;
