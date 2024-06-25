import React from "react";

export default function CategoryBody({ categoris }) {
  return (
    <div className="row container mx-4 my-4">
      {categoris.map((item, index) => (
        <div key={index} className="col-2 text-dark">
          {item.text}
        </div>
      ))}
    </div>
  );
}
