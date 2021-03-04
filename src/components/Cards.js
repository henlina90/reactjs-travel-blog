import React from "react";
import cardImg1 from "../images/cambodia.jpg";
import cardImg4 from "../images/indonesia.jpg";
import cardImg3 from "../images/laos.jpg";
import cardImg5 from "../images/malaysia.jpg";
import cardImg7 from "../images/singapore.jpg";
import cardImg2 from "../images/thailand.jpg";
import cardImg6 from "../images/vietnam.jpg";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Southeast Asia Has Something For Everyone</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardImg1}
              text="There's a magic about this charming yet confounding kingdom that casts a spell on visitors. In Cambodia, ancient and modern worlds collide to create an authentic adventure."
              label="CAMBODIA"
              path="/explore"
            />
            <CardItem
              src={cardImg2}
              text="Friendly and food-obsessed, hedonistic and historic, cultured and curious, Thailand tempts visitors with a smile as golden as the country's glittering temples and tropical beaches."
              label="THAILAND"
              path="/explore"
              blog
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardImg3}
              text="Vivid nature, voluptuous landscapes and a vibrant culture collide with a painful past and optimistic future to make Laos an enigmatic experience for the adventurous."
              label="LAOS"
              path="/explore"
            />
            <CardItem
              src={cardImg4}
              text="This beguiling nation of over 17,000 islands has massive potential for adventures. It's hard to beat Indonesia for the sheer range of experiences on offer."
              label="INDONESIA"
              path="/explore"
              blog
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardImg5}
              text="Dynamic cities, fabulous food, beautiful beaches, idyllic islands and national parks with wildlife-packed rainforests – all of this can be found in Malaysia."
              label="MALAYSIA"
              path="/explore"
              subscribe
            />
            <CardItem
              src={cardImg6}
              text="A land of staggering natural beauty and cultural complexities, of dynamic megacities and hill-tribe villages, Vietnam is both exotic and compelling."
              label="VIETNAM"
              path="/explore"
            />
            <CardItem
              src={cardImg7}
              text="Capitalising on its melting pot of cultures, Singapore is finally getting some spark, and is fast becoming one of Asia’s hit-list destinations."
              label="SINGAPORE"
              path="/explore"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
