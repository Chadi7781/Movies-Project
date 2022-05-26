import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

import { Link, NavLink } from "react-router-dom";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ display: "block", width: "100%", padding: 30 }}>
      <Navbar color="light" light expand="md">
        <NavLink to="/">MyMovies</NavLink>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/genres">
                Genres
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/genres">
                Signup
              </NavLink>{" "}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
