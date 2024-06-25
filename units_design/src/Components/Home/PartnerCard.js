import React from "react";

export default function PartnerCard({
  image,
  name,
  location,
  duration,
  commission,
}) {
  return (
    <div
      className="card m-1 pb-3 shadow-sm mouseHover"
      style={{ width: "18rem", height: "30rem" }}
    >
      <div style={{ height: "65%", width: "100%" }}>
        <img
          src={image}
          className="card-img-top rounded-start w-100 h-100 imgCardAnimation"
          alt="partner"
        />
      </div>

      <div style={{ height: "45%" }} className="card-body">
        <div style={{ height: "15%" }}>
          <h5 className="card-title">{name}</h5>
        </div>

        <div style={{ height: "35%" }} className="row">
          <div className="col-2">
            <i
              className="fa-solid fa-location-dot fa-2xl mt-4 mr-4"
              style={{ color: "#e31635" }}
            ></i>
          </div>
          <div className="col-10">
            <p>{location}</p>
          </div>
          
        </div>

        <p style={{ height: "7%" }}> {duration}</p>

        <p style={{ height: "7%" }}>{commission}</p>
      </div>
    </div>
  );
}
