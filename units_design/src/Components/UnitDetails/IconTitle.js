import React from "react";

export default function IconTitle({ icon, title }) {
  return (
    <div
      style={{
        height: "80px",

        width: "80px",
      }}
    >
      <i class={`${icon} px-4 py-3`} style={{ color: "#5f6063;" }}></i>

      <p className="text-center">{title}</p>
    </div>
  );
}
