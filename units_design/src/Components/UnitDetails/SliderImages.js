import React from "react";
import { proxy } from '../../config'

export default function SliderImages({ images }) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide border"
      data-ride="carousel"
    >
      {/* <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol> */}
      <div className="carousel-inner rounded" style={{ height: "400px" }}>
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
          >
            <img
              className="d-block w-100 h-100 "
              src={proxy+"/"+item}
              alt={`slide ${index}`}
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
