import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import { Jumbotron, Button, ButtonToolbar } from "react-bootstrap";

class Jumbo extends Component {
  render() {
    console.log("jumbo", this.props);
    return (
      <div>
        <Jumbotron>
          <h1>Hi! Welcome To Photos and Camera</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <div>
            <ButtonToolbar>
              <Button onClick={this.props.toggleAlert} variant="primary">
                Add Photos
              </Button>
              <MyModal
                show={this.props.visible}
                toggleAlert={this.props.toggleAlert}
                dropDownSelect={this.props.dropDownSelect}
                fileUploadHandler={this.props.fileUploadHandler}
                fileSelectHandler={this.props.fileSelectHandler}
                categories={this.props.categories}
              />
            </ButtonToolbar>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
