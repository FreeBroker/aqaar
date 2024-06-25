import React from "react";
import "./PremiumPartner.css";
import TitleAndLink from "./TitleAndLink";
import NewsCard from "./NewsCard";

export default function NewsMarket() {
  const newsData = [
    {
      date: "Aug 2023 4.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip",
    },
    {
      date: "Aug 2023 4.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip",
    },
    {
      date: "Aug 2023 4.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip",
    },
    {
      date: "Aug 2023 4.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip",
    },
    {
      date: "Aug 2023 4.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip",
    },
  ];
  return (
    <div className="premiumPartnerContainer mb-3">
      <TitleAndLink title="Real estate market news" link="See All" />
      <div className="row m-4">
        {newsData
          .filter((item, index) => index < 3)
          .map((item, index) => (
            <NewsCard
              key={index}
              image={item.src}
              title={item.title}
              description={item.description}
              className="col-lg-3 col-sm-12 p-2"
            />
          ))}
      </div>
    </div>
  );
}
