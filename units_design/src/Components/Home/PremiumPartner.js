import React from "react";
import TitleAndLink from "./TitleAndLink";
import CardSlider from "./CardSlider";
import "./PremiumPartner.css";

const premiumData = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
  {
    image: "./person.jpg",
    name: "Judge Bea",
    location: "location, 1.district, location, location, location",
    duration: "12 years on Aqar",
    commission: "Commission: 3% grass",
  },
];

export default function PremiumPartner() {
  return (
    <div className="premiumPartnerContainer mb-3">
      <h2 className="mx-4 my-3">Premium Partner</h2>
      <div className="mx-4 mb-5 px-2">
        <CardSlider cardsData={premiumData} />
      </div>
    </div>
  );
}
