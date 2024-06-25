import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { defColor } from "../../Constants/defaults";
import {approve,decline } from "../../api/unit";
export default function PendingCard({
  id,
  destination,
  adname,
  size,
  price,
  imagee,
  init
}) {
 
  return (
    <>
      <div className="card " style={{ width: "20rem", height: "30rem" }}>
        <img
          className="card-img-top w-100 h-50  imgCardAnimation"
          src={imagee}
          alt="Unit"
        />

        <div className="card-body h-50">
          <div style={{ height: "37%" }}>
            <h5 className="card-title m-0 h-100 overflow-hidden">{adname}</h5>
          </div>
          {/* <p className="text-secondary m-0 overflow-hidden h-75">
              {description}
            </p> */}

          <hr />

          <div
            style={{ height: "12%" }}
            className="d-flex justify-content-between"
          >
            <p className="m-0">
              {price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              E.G.P
            </p>
            <p className="m-0">{size} ㎡</p>
          </div>
          <div
            style={{
              height: "16%",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              //border: "solid",
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Link className="btn btn-danger" to={`/details/${id}`}>
              Details
            </Link>
            <Link className="btn btn-danger" to={`/postAd/${id}`}>
              Edit
            </Link>
          </div>
          <div
            className="my-3 d-flex justify-content-between align-items-center"
            style={{ height: "15%" }}
          >
            <h5>Approve??</h5>
            <i
              className={`${
                "fa-solid fa-circle-check fa-xl"
              } `}
              style={{ color: defColor, cursor: "pointer" }}
              onClick={() => {
                approve(id).then(()=>{init()})
              }}
            ></i>
            <i
              className={`${
                 "fa-solid fa-trash fa-xl"
              } `}
              style={{ color: defColor, cursor: "pointer" }}
              onClick={() => {
                decline(id).then(()=>{init()})
              }}
            ></i>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}
