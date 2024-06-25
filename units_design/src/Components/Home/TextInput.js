import React from "react";
import "./TextInput.css";

export default function TextInput({ placeHolder }) {
  return (
    <input
      type="text"
      className="w-100 px-0 form-control"
      placeholder={placeHolder}
    ></input>
  );
}
