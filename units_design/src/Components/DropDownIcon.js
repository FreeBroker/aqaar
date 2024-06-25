import React from "react";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
import { defColor } from "../Constants/defaults";

export default function DropDownIcon() {
  const cookie = new Cookies();

  const space = " ";
  return (
    <div className="dropdown mb-lg-0 mb-md-1">
      <button
        class="btn dropdown-toggle hidden-arrow"
        type="button"
        id="dropdownMenuButton1"
        data-toggle="dropdown"
        aria-expanded="false"
        style={{color: "#fff",backgroundColor: "#B79763",borderColor: "#B79763"
        }}
      >
        <i class="fas fa-user fa-lg mx-2"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link class="dropdown-item" to={"/profile"}>
            <i class="fas fa-user-alt pe-2" style={{ color: defColor }}></i>
            {space}My Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/yourUnits"}>
            <i class="fas fa-house pe-2" style={{ color: defColor }}></i>
            {space} My Ads
          </Link>
        </li>

        <li>
          <Link className="dropdown-item" to={"/favourite"}>
            <i class="fas fa-heart pe-2" style={{ color: defColor }}></i>
            {space} My Favourite
          </Link>
        </li>
        <hr />
        <li
          onClick={() => {
            cookie.remove("user");
            cookie.remove("favorites");
            window.location.replace("/");
            //    window.location.reload(false);
          }}
        >
          <a class="dropdown-item" href="#">
            {" "}
            <i class="fas fa-door-open pe-2" style={{ color: defColor }}></i>
            {space}Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
