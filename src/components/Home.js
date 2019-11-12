import React, { Component } from "react";
import Jumbo from "./Jumbo";
import HomePagePhotos from "./HomePagePhotos";
import Camera from "./Camera";
import Categories from "./Categories";

class Home extends Component {
  render() {
    console.log("home props", this.props);
    return (
      <>
        <Jumbo
          toggleAlert={this.props.toggleAlert}
          toggleModal={this.props.toggleModal}
          visible={this.props.visible}
          categories={this.props.categories}
          fileUploadHandler={this.props.fileUploadHandler}
          dropDownSelect={this.props.dropDownSelect}
          fileSelectHandler={this.props.fileSelectHandler}
        />

        <h1 className="body-header">Categories</h1>
        <Categories
          categories={this.props.categories}
          categoryOnClick={this.props.categoryOnClick}
        />
        <h1 className="body-header">Photos</h1>
        <HomePagePhotos
          currentUser={this.props.currentUser}
          posts={this.props.posts}
          filteredPosts={this.props.filteredPosts}
        />
        <h1 className="body-header">Cameras</h1>
        <Camera />
      </>
    );
  }
}

export default Home;
