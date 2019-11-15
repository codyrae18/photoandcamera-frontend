import React, { Component } from "react";
import Jumbo from "./Jumbo";
import HomePagePhotos from "./HomePagePhotos";
import Camera from "./Camera";
import Categories from "./Categories";
import { Alert, Modal, Card } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <>
        {window.localStorage.getItem("username") ? (
          <Alert timeout="2000" color="success" isOpen={false}>
            You've successfully logged in!
          </Alert>
        ) : (
          <h1> </h1>
        )}
        <Jumbo
          toggleAlert={this.props.toggleAlert}
          toggleModal={this.props.toggleModal}
          visible={this.props.visible}
          categories={this.props.categories}
          fileUploadHandler={this.props.fileUploadHandler}
          dropDownSelect={this.props.dropDownSelect}
          fileSelectHandler={this.props.fileSelectHandler}
          dropDownPlaceHolder={this.props.dropDownPlaceHolder}
          titleHandleChange={this.props.titleHandleChange}
        />

        <h1 className="body-header">Categories</h1>
        <Categories
          categories={this.props.categories}
          categoryOnClick={this.props.categoryOnClick}
          categoryAllPostOnClick={this.props.categoryAllPostOnClick}
        />
        <h1 className="body-header">Photos</h1>
        <HomePagePhotos
          currentUser={this.props.currentUser}
          posts={this.props.posts}
          filteredPosts={this.props.filteredPosts}
          onePhotoClick={this.props.onePhotoClick}
        />
        <h1 className="body-header">Cameras</h1>
        <Camera cameras={this.props.cameras} />

        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={this.props.onePhotoClick}
        >
          <Modal.Body
            style={{
              width: "3000",
              height: "45000000",
              padding: "0"
            }}
          >
            <Card
            // style={{
            //   background: "none",
            //   width: "750px",
            //   height: "450",
            //   margin: "auto"
            // }}
            >
              <Card.Img
                style={{ width: "500px", height: "750px", background: "none" }}
                src={this.props.onePhoto}
              />
            </Card>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Home;
