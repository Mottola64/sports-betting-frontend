import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar Navbar" light expand="lg">
        <NavbarBrand href="/">The Underdog</NavbarBrand>

        <Nav className="mr-auto " navbar>
          <NavItem>
            <NavLink to="/news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/odds">Odds</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/nfl">NFL</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/mlb">MLB</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/nba">NBA</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/mlbstandings">MLB Standings</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
