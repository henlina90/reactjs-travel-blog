import React from "react";
import "../App.css";
import video from "../videos/video-3.mp4";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>LIFE'S A TRIP</h1>
      <p>EXPLORE UNDERRATED PLACES IN SOUTHEAST ASIA</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Explore
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Our Story <i className="fas fa-arrow-right" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
