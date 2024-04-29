// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerImage from "../assets/banner-image.svg";

const Home = () => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={BannerImage} alt="banner-image" />
      </div>
      <div className="">Hello</div>
    </div>
  );
};

export default Home;
