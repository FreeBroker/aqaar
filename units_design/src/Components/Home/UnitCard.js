import './unitcard.css';
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../../api/wishlist";
import { Cookies } from "react-cookie";

export default function UnitCard({
  id,
  image,
  title,
  description,
  destination,
  price,
  size,
  update_favorites, favorites
}) {
  const cookie = new Cookies();
  const [favourite, setFavourite] = useState('false');

  const [dir, setDir] = useState('rtl');

  useEffect(() => {
    if (document.body.dir === 'rtl') {
      setDir('rtl')
    }
    else setDir('ltr')
  }, [])

  return (
    <>
      <div
        className="card mb-3 mx-1 mouseHover "
        style={{ maxWidth: "560px", height: "200px" }}
      >
        <div className={`${dir === 'rtl' ? 'dir-right' : 'dir-left'}`}
          onClick={() => {
            if (cookie.get("user")) {
              create(id);
              update_favorites()
            } else {
              alert("You have to log in first");
            }
          }}
          style={{
            position: "absolute",
            bottom: "5px",
            zIndex: 1,
          }}
        >
          <i class={`${favorites?.wish?.includes(id) ? "fa-solid" : "fa-regular"} fa-heart fa-lg`}
            style={{ color: "black" }}
          ></i>
        </div>
        <Link
          to={destination}
          className="text-dark w-100 h-100"
          style={{ textDecoration: "none" }}
        >
          <div className="row h-100 w-100">
            <div className="col-7 h-100 w-100">
              <img
                src={image}
                className="img-fluid rounded-start w-100 h-100 rounded"
                alt="Unit"
              />
            </div>
            <div className="col-5 h-100 w-100 p-2">
              <h5
                className="card-title overflow-hidden"
                style={{ height: "28%", textAlign: 'start' }}
              >
                {title}
              </h5>
              <p
                className="card-text overflow-hidden"
                style={{ height: "30%", textAlign: 'start' }}
              >
                {description}
              </p>
              <div>
                <h6 style={{ height: "10%", textAlign: 'start' }} className='card-price'>
                  {price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}{" "}
                  E.G.P
                </h6>
                <h6 className='card-size' style={{ height: "10%", textAlign: 'start' }}>{size?size:''} ㎡</h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
