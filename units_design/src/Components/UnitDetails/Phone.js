import React from "react";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { useTranslation } from "react-i18next";

export default function Phone({ phone }) {
  const cookie = new Cookies();
  const [showNubmer, setShowNumber] = useState(false);
  const { t } = useTranslation()
  return (
    <button
      className="w-100 d-flex justify-content-center align-items-center rounded btn "
      style={{
        color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763"
      }}
      onClick={() => {
        cookie.get("user")
          ? setShowNumber(true)
          : alert("You have to log in first");
      }}
    >
      <i className="fa-solid fa-phone fa-xl" style={{ color: "white" }}></i>

      {showNubmer ? (
        <h5 className="mx-3 pt-2">{phone}</h5>
      ) : (
        <h5 className="mx-2 pt-2">{t('show_number')}</h5>
      )}
    </button>
  );
}
