import React, { Component } from "react";
import Jumbo from "./Jumbo";
import HomePagePhotos from "./HomePagePhotos";
import Camera from "./Camera";
import Categories from "./Categories";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbo />
        <h1 className="body-header">Categories</h1>
        <Categories />
        <h1 className="body-header">Photos</h1>
        <HomePagePhotos />
        <h1 className="body-header">Cameras</h1>
        <Camera />
      </>
    );
  }
}

export default Home;
