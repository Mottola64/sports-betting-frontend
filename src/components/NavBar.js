import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar Navbar" light expand="lg">
        <NavbarBrand href="/">The Underdog</NavbarBrand>

        <Nav className="mr-auto " navbar>
          <NavItem>
            <NavLink href="/news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/nfl">NFL</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/mlb">MLB</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/nba">NBA</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ncaab">NCAAB</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ncaaf">NCAAF</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/mlbstandings">MLB Standings</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
