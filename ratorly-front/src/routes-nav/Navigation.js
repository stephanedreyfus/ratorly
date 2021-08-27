import React from "react";
import SearchForm from "./SearchForm"
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav
} from 'reactstrap';

/** Navigation bar for site. Appears on every page.
 * 
 * Rendered by App.
*/

function Navigation({doSearch}) {
  return (
  <div id="nav-container">
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
      <Nav>
        <NavLink className="nav-link" to="/test">
          ReactStrap Test Page
        </NavLink>
      </Nav>
      <SearchForm />
    </Navbar>
  </div>  
  );
}

export default Navigation;
