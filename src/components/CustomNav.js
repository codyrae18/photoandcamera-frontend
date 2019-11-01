import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

class CustomNav extends Component {
  render() {
    const navStyle = {
      color: "black"
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1>LOGO</h1>
          <ul className="nav-links">
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navStyle} to="/profile">
              <li>Profile</li>
            </Link>
            <Link style={navStyle} to="/signup">
              <li>Sign Up</li>
            </Link>
            <Link style={navStyle} to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default CustomNav;
// <div className="container">

//   <Navbar default collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <Link to="/">PhotoandCamera</Link>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>
//   <Navbar.Collapse>
//     <Nav pullRight>
//       <NavItem eventKey={1} componentClass={Link} href="/" to="/">
//         Home
//       </NavItem>
//       <NavItem
//         eventKey={2}
//         componentClass={Link}
//         href="/profile"
//         to="/profile"
//       >
//         Profile
//       </NavItem>
//       <NavItem
//         eventKey={3}
//         componentClass={Link}
//         href="/signup"
//         to="/singup"
//       >
//         Sign Up
//       </NavItem>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
