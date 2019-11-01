import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

export default class CustomNav extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Brand>
            <Link to="/" className="brand">
              Photo and Camera
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="nav-links">
              <Link to="/">
                <NavItem>Home</NavItem>
              </Link>
              <Link to="/profile">
                <NavItem>Profile</NavItem>
              </Link>
              <Link to="/login">
                <NavItem>Login</NavItem>
              </Link>
              <Link to="/signup">
                <NavItem>Sign Up</NavItem>
              </Link>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
