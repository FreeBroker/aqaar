import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { defColor } from "../../Constants/defaults";
import { assigenhome, removehome, deleteunit } from "../../api/unit";

export default function AdminCard({
  id,
  destination,
  adname,
  size,
  price,
  imagee,
  description,
  home,
  updateids,
  unitCode,
  unitDate,
  phone,
}) {
  const [inHome, setInHome] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setInHome(home.includes(id));
  }, [home, id]);

  const handleDetailsClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(destination);
  };

  const handleDelete = async () => {
    try {
      await deleteunit(id);
      updateids();
    } catch (error) {
      console.error("Error deleting unit:", error);
    }
  };

  const handleEditClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(`/postAd/${id}`);
  };

  return (
    <div className="card" style={{ width: "22rem", height: "35rem" }}>
      <img
        className="card-img-top w-100 h-50 imgCardAnimation"
        src={imagee}
        alt="Unit"
      />
      <div className="card-body h-50">
        <div style={{ height: "34%" }}>
          <h5 className="card-title m-0 h-100 overflow-hidden">{adname}</h5>
        </div>
        <hr />
        <div
          style={{ height: "10%" }}
          className="d-flex justify-content-between align-items-center"
        >
          <p className="m-0">
            {price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} E.G.P
          </p>
          <p className="m-0">{size} ㎡</p>
          <p style={{ height: "12%" }} className="unitCode">{unitCode}</p>
        </div>

        <div style={{ height: "13%" }} className="d-flex justify-content-between align-items-center">
          <p className="m-0">Date: {new Date(unitDate).toLocaleDateString()}</p>
          <p className="m-0">Phone: {phone}</p>
        </div>

        <div
          style={{ height: "14%" }}
          className="d-flex justify-content-between align-items-center"
        >
          
          <button
            className="btn"
            onClick={handleDetailsClick}
            style={{ color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763" }}
          >
            Details
          </button>
          <button
            className="btn"
            onClick={handleEditClick}
            style={{ color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763" }}
          >
            Edit
          </button>
          <button
            className="btn"
            type="button"
            onClick={handleDelete}
            style={{ color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763" }}
          >
            Delete
          </button>
        </div>
        <div
          className="my-3 d-flex justify-content-between align-items-center"
          style={{ height: "10%" }}
        >
          <h5>Show In Home?</h5>
          <i
            className={`${
              inHome ? "fa-solid fa-circle-check fa-xl" : "fa-regular fa-circle-check fa-xl"
            }`}
            style={{ color: defColor, cursor: "pointer" }}
            onClick={() => {
              if (inHome) {
                removehome(id).then(updateids);
              } else {
                assigenhome(id).then(updateids);
              }
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
