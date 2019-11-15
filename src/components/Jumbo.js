import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import { Jumbotron, Button, ButtonToolbar } from "react-bootstrap";

class Jumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>
            Hi {window.localStorage.getItem("username")}! Welcome To Photos and
            Camera
          </h1>
          <h3 style={{ color: "white" }}>
            "Taking an image, freezing a moment, reveals how rich reality truly
            is."
          </h3>
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
                dropDownPlaceHolder={this.props.dropDownPlaceHolder}
                titleHandleChange={this.props.titleHandleChange}
              />
            </ButtonToolbar>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
