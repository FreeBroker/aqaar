import React from "react";
import { defColor } from "../../Constants/defaults";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useTranslation } from "react-i18next";

export default function SendMessageBtn({ unit_id, user_id }) {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const {t}=useTranslation()
  // to={"/chat"}
  return (
    <div
      onClick={() => {
        if(cookie.get("user")){
          navigate("/chat", {state :{ unitId: unit_id, userId: user_id }});
        }else{
          alert("You have to log in first"); 
        }
      }}
    >
      <div className="d-flex mouseHover justify-content-center align-items-center border rounded my-3 mx-1">
        <i
          className="fa-solid fa-message py-4 px-2 fa-lg"
          style={{ color: defColor }}
        ></i>
        <h6 className="fw-bold text-dark pt-2">{t('send_message')}</h6>
      </div>
    </div>
  );
}
