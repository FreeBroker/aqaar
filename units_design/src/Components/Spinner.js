import React from "react";
import { ClipLoader } from "react-spinners";
import { defColor } from "../Constants/defaults";
export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader color={defColor} size={50} loading={true} />
    </div>
  );
}
