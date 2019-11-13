import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

class HomePagePhotos extends Component {
  render() {
    // console.log("home page photos props", this.props);
    return (
      <Container className="home-container">
        <div className="HomePage">
          <Row>
            {this.props.filteredPosts.map(post => (
              <Col key={post.id} xs={6} md={4}>
                <Card style={{ width: "22rem" }}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3000/${post.post_image}`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default HomePagePhotos;
