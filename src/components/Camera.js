import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

class Camera extends Component {
  state = {};
  render() {
    return (
      <Container className="camera-container">
        <Row>
          {this.props.cameras.map(camera => (
            <Col key={camera.id} md={3}>
              <div className="camera-row">
                <Card
                  style={{
                    background: "none",
                    width: "240x",
                    height: "350px",
                    margin: "auto"
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{ width: "240px", height: "350px", margin: "auto" }}
                    src={camera.image_url}
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Camera;
// {/* <Row>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img
//                 variant="top"
//                 src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
//               />
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img
//                 variant="top"
//                 src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
//               />
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img
//                 variant="top"
//                 src="https://images.unsplash.com/photo-1547679904-ac76451d1594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60/100px180"
//               />
//             </Card>
//           </Col>
//           <Col>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img
//                 variant="top"
//                 src="https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60/100px180"
//               />
//             </Card>
//           </Col>
//         </Row> */}
