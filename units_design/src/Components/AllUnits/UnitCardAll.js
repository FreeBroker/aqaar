import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../../api/wishlist";
import { Cookies } from "react-cookie";
import './unitCardAll.css'

export default function UnitCardAll({
  id,
  destination,
  adname,
  size,
  price,
  imagee,
  description,
  unitCode, // Add unitCode as a prop
  update_favorites,
  favorites,
  myUnits,
}) {
  const cookie = new Cookies();
  const [dir, setDir] = useState('rtl');

  useEffect(() => {
    if (document.body.dir === 'rtl') {
      setDir('rtl')
    } else {
      setDir('ltr')
    }
  }, [])

  return (
    <>
      <div
        className="card unit-card mouseHover"
        style={{ height: "500px" }}
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
            bottom: "3px",
            right: "5px",
            zIndex: 0.5,
          }}
        >
          <i
            className={`${favorites?.wish?.includes(id) ? "fa-solid" : "fa-regular"
              } fa-heart fa-lg`}
            style={{ color: "black" }}
          ></i>
        </div>
        {myUnits && (
          <Link 
            className="btn" 
            to={`/postAd/${id}`} 
            style={{ 
              color: "#fff",
              backgroundColor: "#B79763",
              borderColor: "#B79763"
            }}
          >
            Edit
          </Link>
        )}
        <Link
          to={destination}
          className="text-dark"
          style={{ textDecoration: "none", height: "100%", width: "100%" }}
        >
          <div className="h-50">
            <img
              className="card-img-top w-100 h-100 imgCardAnimation"
              src={imagee}
              alt="Unit"
            />
          </div>
          <div className="card-body h-50 mb-1">
            <div style={{ height: "50%", margin: 0 }}>
              <h5 className="card-title h-50 mb-3" style={{ textAlign: 'start' }}>
                {adname}
              </h5>
              <p
                className="text-secondary overflow-hidden"
                style={{ height: "50%", textAlign: 'start' }}
              >
                {description}
              </p>
              <h6 style={{ height: "15%", textAlign: 'start' , color: 'black'}} className='unitCode'>
                {unitCode}
              </h6>
              <h6 style={{ height: "10%", textAlign: 'start' }} className='card-price'>
                {price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}{" "}
                E.G.P
              </h6>
            </div>
            
            <hr />            
          </div>
        </Link>
      </div>
    </>
  );
}
