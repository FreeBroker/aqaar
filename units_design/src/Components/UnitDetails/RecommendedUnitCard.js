import React from "react";

export default function RecommendedUnitCard() {
  return (
    <div class="card mouseHover" style={{ width: "15rem", height: "18rem" }}>
      <img
        className="card-img-top h-75 m-0 imgCardAnimation"
        src="https://lo.ingatlancdn.com/corporate-project/532/C_61afe651804ad9.29942482.jpg?1638917713"
        alt="Unit"
      />
      <div className="card-body">
        <h5 className="card-title m-0">Title</h5>
        <h6 className=" m-0">Location</h6>

        <div className="d-flex justify-content-between mt-1">
          <p className="m-0 text-secondary">Price</p>
          {/* {price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} */}
          <p className="m-0 text-secondary">Size</p>
        </div>
      </div>
    </div>
  );
}
