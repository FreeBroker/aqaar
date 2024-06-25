import React from "react";
import { Link } from "react-router-dom";
import { create } from "../../api/wishlist";
import { useTranslation } from "react-i18next";

export default function SaveAdBtn(props) {
  const { t } = useTranslation()
  return (
    <Link to={""} style={{ textDecoration: "none" }}>
      {props.favorites?.wish?.includes(props.id) ? <div className="d-flex mouseHover justify-content-center align-items-center border rounded mb-5 mx-1">
        <i
          className="fa-solid fa-heart py-3 px-3 fa-lg"
          style={{ color: "black" }}
        ></i>
        <h6 className="fw-bold text-dark pt-2">Added To Wishlist</h6>
      </div> : <div className="d-flex mouseHover justify-content-center align-items-center border rounded  mx-1" onClick={() => {
        create(props.id);
        props.update_favorites()
      }}>
        <i
          className="fa-regular fa-heart py-3 px-3 fa-lg"
          style={{ color: "black" }}
        ></i>
        <h6 className="fw-bold text-dark pt-2">{t('add_wishlist')}</h6>
      </div>}
    </Link>
  );
}
