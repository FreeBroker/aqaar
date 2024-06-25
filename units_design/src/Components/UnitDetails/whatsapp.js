import React from "react";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { useTranslation } from "react-i18next";

export default function Whatsapp({ whatsapp }) {
  const cookie = new Cookies();
  const [showNubmer, setShowNumber] = useState(false);
  const { t } = useTranslation()
  return (
    <div className="d-flex justify-content-center">
      <button
        className="w-50 d-flex justify-content-center align-items-center rounded btn mt-2"
        style={{
          backgroundColor: "#25d366", // WhatsApp logo color
          border: "none",
          cursor: "pointer",
          padding: "0",
          position: "relative"
        }}
      onClick={() => {
        cookie.get("user")
          ? setShowNumber(true)
          : alert("You have to log in first");
      }}
    >
      {showNubmer ? (
        <h5 className="mx-3 pt-2 text-white">{whatsapp}</h5>
      ) : (
        <i className="fa-brands fa-whatsapp fa-3x" style={{ color: "#fff" }}></i>
      )}
    </button>
    </div>
  );
}
