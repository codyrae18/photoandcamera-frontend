import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

export default class CustomNav extends Component {
  render() {
    // console.log("CustomNav", this.props.currentUser);
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Brand>
            <Link to="/" className="brand">
              Photo and Camera
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Form inline>
            {window.localStorage.getItem("username") ? (
              <h1> {window.localStorage.getItem("username")}</h1>
            ) : (
              <h1>Not logged in, aww</h1>
            )}
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button className="search-button" type="submit">
              Submit
            </Button>
          </Form>
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
              {window.localStorage.getItem("username") && (
                <NavItem>
                  <Button
                    className="search-button"
                    onClick={this.props.handleClickLogout}
                  >
                    Logout
                  </Button>
                </NavItem>
              )}
            </Nav>
            <Navbar.Toggle />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
