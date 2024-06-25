import React from "react";
import PartnerCard from "./PartnerCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CardSlider.css";
import { settings } from "../../Constants/SliderCardSettings";
export default function CardSlider({ cardsData }) {
  const cards = cardsData.map((item, index) => (
    <PartnerCard
      key={index}
      image={item.image}
      name={item.name}
      location={item.location}
      duration={item.duration}
      commission={item.commission}
    />
  ));
  return <Slider {...settings}>{cards}</Slider>;
}
