import React from "react";

export default function PrivatePerson({name}) {
  return (
    <div className="d-flex justify-content-center align-items-center my-4 mx-1">
      <i
        className="fa-solid fa-user py-4 px-3 fa-2xl"
        style={{ color: "gray" }}
      ></i>
      <h6 className="fw-bold text-dark"> {name||"private"}</h6>
    </div>
  );
}
