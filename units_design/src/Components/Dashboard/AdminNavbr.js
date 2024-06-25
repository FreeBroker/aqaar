import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

import { Link, NavLink } from "react-router-dom";

const cookie = new Cookies();
const menuItem = [
  {
    path: "/",
    name: "Manage Units",
    icon: <i class="fa-solid fa-home" style={{ color: "white" }}></i>,
  },
  {
    path: "/pending",
    name: "Pending units",
    icon: <i class="fa-solid fa-list" style={{ color: "white" }}></i>,
  },
  {
    path: "/manageUsers",
    name: "Manage Users",
    icon: <i class="fa-solid fa-user" style={{ color: "white" }}></i>,
  },
  {
    path: "/postAd",
    name: "Post Ad",
    icon: <i class="fa-solid fa-plus" style={{ color: "white" }}></i>,
  },
];
export default function AdminNavbar({ setIsAdmin }) {
  const [activeTab, setActiveTab] = useState("Manage Units");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="mx-3">
          <Link to={"/"}>
            <img src="logo.png" alt="Logo" style={{ maxWidth: '150px', maxHeight: '50px' }} />
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            {menuItem.map((item, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: activeTab === item.name ? "gray" : "",
                }}
                onClick={() => setActiveTab(item.name)}
              >
                <NavLink to={item.path} className="link">
                  <div className="icon">{item.icon} </div>
                  <div className="link_text text-light">{item.name}</div>
                </NavLink>
              </li>
            ))}
            <div
              className="mouseHover"
              onClick={() => {
                setIsAdmin(false);

                cookie.set("admin", false);
              }}
            >
              <Link to={"/"} className="link">
                <div className="icon">
                  <i
                    class="fas fa-door-open pe-2"
                    style={{ color: "white" }}
                  ></i>
                </div>
                <div className="link_text text-light">Sign Out</div>
              </Link>
            </div>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "#fff" }} >▼</span>
          
        </button>

        
      </nav>
    </div>
  );
}
