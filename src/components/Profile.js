import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="signup">
          <h1>My Profile</h1>
        </div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1547679904-ac76451d1594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60/100px180"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
