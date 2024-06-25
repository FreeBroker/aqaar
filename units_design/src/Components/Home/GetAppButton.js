import React from "react";
import './getAppButton.css'

export default function GetAppButton({ icon, smallTitle, bigTitle, color }) {
  return (
    <div
      className="bg-dark row align-items-center mouseHover btns"
      style={{ height: "40px", borderRadius: 10 }}
    >
      <div className="col-3">
        <i class={`${icon} fa-xl`} style={{ color: color }}></i>
      </div>
      <div className="col-9 h-100">
        <p
          className="text-uppercase text-light mb-0 pt-1 small"
        >
          {smallTitle}
        </p>
        <p className=" text-light fw-bold m-0 big">
          {bigTitle}
        </p>
      </div>
    </div>
  );
}
