import React, { Component } from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

class Categories extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1547679904-ac76451d1594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1547679904-ac76451d1594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
                />
              </Card>
            </Col>
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1572205336203-0211902b99bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1524072962259-04f23a9baa38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1553634208-34a05bcf43c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1571315571166-ea32c32d3582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1572435230185-33504bec96c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1560458656-1cdd06f4018c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1569834708312-715364879e15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "13rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1572411245189-67722b343fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
                />
              </Card>
            </Col>
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Categories;
