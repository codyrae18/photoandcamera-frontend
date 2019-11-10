import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

class HomePagePhotos extends Component {
  render() {
    console.log("home page photos props", this.props);
    return (
      <Container className="home-container">
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
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
            <Card style={{ width: "20rem" }}>
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
            <Card style={{ width: "20rem" }}>
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

        <Row>
          {this.props.posts.map(post => (
            <Col xs={6} md={4}>
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src={`http://localhost:3000/${post.post_image}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default HomePagePhotos;
