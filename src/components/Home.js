import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">Welcome to, Photos and Camera!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">
              Add Photo!
            </Link>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
