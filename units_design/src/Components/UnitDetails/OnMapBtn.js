import React from "react";
import { defColor } from "../../Constants/defaults";

export default function OnMapBtn({ icon, title, onMapPress, color }) {
  return (
    <div className="mouseHover btnIcon px-3" onClick={onMapPress}>
      <i className={icon} style={{ color: defColor, marginRight: "10px" }}></i>
      <p className={`fw-bold mt-3 ${color}`}>{title}</p>
    </div>
  );
}
