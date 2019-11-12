import React, { Component } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

class MyModal extends Component {
  state = {};
  render() {
    console.log("MyModal", this.props);
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Upload Photo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <form>
                  <div>
                    <input
                      type="file"
                      name="file"
                      aria-describedby="inputGroupFileAddon01"
                      onChange={this.props.fileSelectHandler}
                    />
                    <p>
                      <small>Upload your photos here</small>
                    </p>
                  </div>

                  <div>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Dropdown button"
                      onClick={this.props.dropdownSelect}
                    >
                      {this.props.categories.map(category => (
                        <Dropdown.Item key={category.id} id={category.id}>
                          {category.title}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>
                  <br></br>
                  <button
                    className="upload-photo-btn"
                    type="submit"
                    onClick={this.props.fileUploadHandler}
                  >
                    Submit
                  </button>
                </form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.toggleAlert}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
// <Modal
// dialogClassName="modal-90w"
// aria-labelledby="example-custom-modal-styling-title"
// isOpen={true}
// >
// <Modal.Header toggle={this.props.toggleModal}>
//   Modal Title
// </Modal.Header>
// <Modal.Body>Hello!</Modal.Body>
// <Modal.Footer>
//   <Button color="primary">Sign Up</Button>
//   <Button color="secondary">Cancel</Button>
// </Modal.Footer>
// </Modal>
