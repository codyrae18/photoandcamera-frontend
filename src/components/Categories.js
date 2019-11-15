import React, { Component } from "react";
import { Row, Card, Col } from "react-bootstrap";

class Categories extends Component {
  state = {};
  render() {
    // console.log("categories props", this.props.categories);
    return (
      <div>
        <div className="categories-card">
          <Row className="row-categories">
            <Col md={1}>
              <Card className="category-card group">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573728795096-e91f4d01150a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  className="category-pic"
                  onClick={this.props.categoryAllPostOnClick}
                />

                <Card.Body>
                  <Card.Title>All Photos</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            {this.props.categories.map(category => (
              <Col md={1}>
                <Card key={category.id} className="category-card group">
                  <Card.Img
                    variant="top"
                    src={category.img_url}
                    className="category-pic"
                    id={category.id}
                    onClick={this.props.categoryOnClick}
                  />

                  <Card.Body>
                    <Card.Title>{category.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Categories;

// <Carousel.Item>
// {/* <Row>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1572205336203-0211902b99bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1572205336203-0211902b99bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1524072962259-04f23a9baa38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1553634208-34a05bcf43c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1571315571166-ea32c32d3582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   {/* <Carousel.Caption>
//     <h3>First slide label</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//   </Carousel.Caption> */}

//   {/* <Carousel.Caption>
//     <h3>Second slide label</h3>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//   </Carousel.Caption> */}
// </Row>
// </Carousel.Item>
// <Carousel.Item>
// <Row>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1572435230185-33504bec96c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1572435230185-33504bec96c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1560458656-1cdd06f4018c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1569834708312-715364879e15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   <Col>
//     <Image
//       variant="top"
//       src="https://images.unsplash.com/photo-1572411245189-67722b343fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/100px180"
//       roundedCircle
//     />
//   </Col>
//   {/* <Carousel.Caption>
//     <h3>First slide label</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//   </Carousel.Caption> */}

//   {/* <Carousel.Caption>
//     <h3>Third slide label</h3>
//     <p>
//       Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//     </p>
//   </Carousel.Caption> */}
// </Row>
// </Carousel.Item> */}
