import React, { Component } from "react";
import Jumbo from "./Jumbo";
import HomePagePhotos from "./HomePagePhotos";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbo />
        <HomePagePhotos />
      </>
    );
  }
}

export default Home;
