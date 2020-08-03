import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar Navbar" dark expand="lg">
        <NavbarBrand href="/">The Underdog</NavbarBrand>

        <Nav className="mr-auto " navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/news">
              News
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/odds">
              Odds
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/dailyschedule">
              Daily Schedule
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/oddsconverter">
              Odds Converter
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/mlbstandings">
              MLB Standings
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
