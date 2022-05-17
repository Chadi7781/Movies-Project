import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ display: "block", width: 550, padding: 30 }}>
      <h5>MyMovies</h5>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Signup</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
