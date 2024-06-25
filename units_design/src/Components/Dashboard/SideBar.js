import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";

export default function SideBar({ children, setIsAdmin }) {
  const menuItem = [
    {
      path: "/admin",
      name: "Manage Units",
      icon: <i className="fa-solid fa-home" style={{ color: "white" }}></i>,
    },
    {
      path: "/manageUsers",
      name: "Manage Users",
      icon: <i className="fa-solid fa-user" style={{ color: "white" }}></i>,
    },
    {
      path: "/postAd",
      name: "Post Ad",
      icon: <i className="fa-solid fa-plus" style={{ color: "white" }}></i>,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Manage Units");

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <i className="fa-solid fa-bars" onClick={toggle}></i>
          </div>
        </div>
        <hr />
        {menuItem.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: activeTab === item.name ? "brown" : "",
            }}
            onClick={() => setActiveTab(item.name)}
          >
            <NavLink to={item.path} className="link">
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text text-light"
              >
                {item.name}
              </div>
            </NavLink>
          </div>
        ))}
        <div
          className="mouseHover"
          onClick={() => {
            setIsAdmin(false);
          }}
        >
          <Link to="/" className="link">
            <div className="icon">
              <i className="fas fa-door-open pe-2" style={{ color: "white" }}></i>
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text text-light"
            >
              Sign Out
            </div>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
