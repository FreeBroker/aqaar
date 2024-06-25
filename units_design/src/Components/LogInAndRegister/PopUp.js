import React from "react";
import "./Popup.css";
import LoginWindow from "./LoginWindow";

export default function PopUp({
  toggleModeLogin,
  login,
  toggleModelSignup,
  setIsAdmin,
}) {
  return (
    <div className="popup">
      <div
        className="overlay"
        onClick={login ? toggleModeLogin : toggleModelSignup}
      ></div>
      <div className="popupContent">
        <LoginWindow
          login={login}
          toggleModeLogin={toggleModeLogin}
          toggleModelSignup={toggleModelSignup}
          setIsAdmin={setIsAdmin}
        />

        <div
          onClick={() => {
            if (login) toggleModeLogin();
            else toggleModelSignup();
          }}
          className="btnClose btn"
        >
          <i
            class="fa-sharp fa-solid fa-xmark"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
