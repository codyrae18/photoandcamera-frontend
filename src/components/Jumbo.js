import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

class Jumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Hi! Welcome To Photos and Camera</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Add Photos</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
