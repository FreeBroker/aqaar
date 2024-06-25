import React from "react";
import OnMapBtn from "./OnMapBtn";
import SliderImages from "./SliderImages";

export default function ImageDetails({
  adname,
  price,
  size,
  images,
  onMapPress,
}) {
  return (
    <div className="detailsContainer">
      <div className="d-flex justify-content-between m-3 align-items-center">
        <div>
          <h2 className="d-none d-lg-block" style={{ textAlign: 'start' }}>{adname}</h2>
          <h4 className="d-block d-lg-none">{adname}</h4>
        </div>
        {/* <OnMapBtn
          title={"Report"}
          icon="fa-solid fa-flag fa-lg"
          onMapPress={onMapPress}
        /> */}
      </div>
      <div
        style={{
          width: "95%",
          maxHeight: "450px",
          margin: "auto",
        }}
      >
        <SliderImages images={images} />
      </div>

      <div className="row border rounded my-2 mx-3">
        <div style={{ borderRight: "1px solid grey" }} className="col-6 my-2">
          <p className="m-0 text-center">Price</p>
          <h4 className="text-center m-0">
            {price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} E.G.P
          </h4>
          {/* <p className="text-center m-0">13.156</p> */}
        </div>
        <div className="col-6 my-2">
          <p className=" text-center m-0">Floor area</p>
          <h4 className="text-center m-0">{size} ㎡</h4>
        </div>
      </div>
    </div>
  );
}
