import { useState, useEffect } from "react";
import React from "react";
import "./lohstyle.css";
import Login from "./Login";

export function ConfirmemailPop() {
  const [showbtn, setShowbtn] = useState(true);

  return (
    <div className="confirmemailPop-div ">
      <div className="w-100 confirmemailPop-h-div1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="161"
          height="161"
          viewBox="0 0 161 161"
          fill="none"
        >
          <g filter="url(#filter0_d_1001_11700)">
            <rect
              x="30"
              y="20"
              width="101"
              height="101"
              rx="50.5"
              fill="#D99D2B"
            />
          </g>
          <path
            d="M65.0695 71.2015L75.8241 81.7223L97.3333 60.6807"
            stroke="#EBF0FF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_1001_11700"
              x="0"
              y="0"
              width="161"
              height="161"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.278431 0 0 0 0 0.356863 0 0 0 0 0.847059 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1001_11700"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1001_11700"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className=" w-100 confirmemailPop-h-div1">
        <span
          className="confirmemailPop-h1 

"
        >
          The email has been sent successfully!
        </span>
      </div>
      <div className="w-100 confirmemailPop-h-div1">
        <span className="confirmemailPop-h2">
          Please check your email Click on the link to reset your password
        </span>
      </div>
      <div className="w-100 ForgitPassPop-h-div1">
        <div className="ForgitPassPop-h-div2">
          <span className="ForgitPassPop-p1 mx-1">
            Didn't receive the link ?{" "}
          </span>
          <a className="ForgitPassPop-p2" data-bs-toggle="modal" href="#sende">
            {" "}
            Resend the link{" "}
          </a>
        </div>
        <button
          className="ForgitPassPop-btn"
          data-bs-target="#Login"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
        >
          sign in
        </button>
      </div>
    </div>
  );
}

function ForgitPassPop() {
  const [email, setEmail] = useState("");

  return (
    <div className="ForgitPassPop-div">
      <div className="w-100 ForgitPassPop-h-div1">
        <div className="ForgitPassPop-h1">Forgot your password</div>
        <div className="ForgitPassPop-h2">Moments to change the password</div>
      </div>
      <div className="w-100">
        <input
          placeholder="  Email"
          type="email"
          className="bg-white forgit-input "
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="w-100 ForgitPassPop-h-div1">
        <div className="ForgitPassPop-h-div2">
          <span className="ForgitPassPop-p1">Remember your password?</span>
          <button
            className="ForgitPassPop-p2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            sign in
          </button>
        </div>
        {/* <div className='ForgitPassPop-btn'>Confirm</div> */}
        <a className="ForgitPassPop-btn" data-bs-toggle="modal" href="#sendE" role="button">
          {" "}
          Confirm{" "}
        </a>
      </div>
    </div>
  );
}

export default ForgitPassPop;
