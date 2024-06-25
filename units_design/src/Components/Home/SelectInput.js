import React from "react";

export default function SelectInput({ data }) {
  return (
    <select className="form-select" aria-label="Default select example">
      {data.map((item, index) => (
        <option key={index} value="1">
          {item}
        </option>
      ))}
    </select>
  );
}
