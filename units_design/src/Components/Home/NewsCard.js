import React from "react";

export default function NewsCard({ date, title, description }) {
  return (
    <div
      className="card m-1 pb-3 shadow mouseHover"
      style={{ width: "24rem", height: "30rem" }}
    >
      <div style={{ height: "50%", width: "100%" }}>
        <img
          src="./person.jpg"
          className="card-img-top rounded-start w-100 h-100 imgCardAnimation"
          alt="partner"
        />
      </div>

      <div style={{ height: "45%" }} className="card-body">
        <div style={{ height: "15%" }}>
          <p style={{ color: "gray" }}>Aug 2023 4.</p>
        </div>

        <div style={{ height: "40%" }}>
          <h5 className="card-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </h5>
        </div>

        <div
          style={{
            height: "40%",

            overflow: "hidden",
          }}
        >
          <p
            style={{
              color: "gray",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>
    </div>
  );
}
