import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Card, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid className="jumbo">
            <Container className="overlay">
              <h1 className="display-4">Welcome to, Photos and Camera!</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
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
          <Container className="home-container">
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
      </div>
    );
  }
}

export default Home;
