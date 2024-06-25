import React from "react";
import OnMapBtn from "./OnMapBtn";

export default function UnitLocation() {
  return (
    <div className="d-flex justify-content-between m-3 align-items-center">
      <div>
        <h4 className="fw-bold">Map</h4>
        <h6 className="text-secondary">details</h6>
      </div>
      <OnMapBtn
        title={"Magnification"}
        icon={"fa-solid fa-maximize fa-xl"}
        color={"text-danger"}
      />
    </div>
  );
}
