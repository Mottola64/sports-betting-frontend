import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar" light expand="lg">
        <NavbarBrand href="/">The Underdog</NavbarBrand>

        <Nav className="mr-auto " navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/news">
              News
            </NavLink>
          </NavItem>
          <NavLink tag={RRNavLink} to="/upcominggames">
            Upcoming Games
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
